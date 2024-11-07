"use client";

import { useState, memo } from 'react';
import { useForm } from 'react-hook-form';
import { auth, db, storage } from '@/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaEye, FaEyeSlash, FaTrash, FaSpinner } from 'react-icons/fa';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import Image from 'next/image';

interface RegistrationFormData {
  gender: string;
  name: string;
  dob: string;
  placeOfBirth: string;
  timeOfBirth: string;
  height: string;
  complexion: string;
  caste: string;
  occupation: string;
  income: string;
  education: string;
  fathersName: string;
  fathersOccupation: string;
  mothersName: string;
  mothersOccupation: string;
  siblings: string;
  maritalStatus: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  portfolioImages: FileList;
}

interface FieldProps {
  label: string;
  name: keyof RegistrationFormData; // Ensures only valid fields from RegistrationFormData are used
  type: string;
  options?: string[];
  register: UseFormRegister<RegistrationFormData>; // Specific to RegistrationFormData
  required: boolean;
  errors: FieldErrors<RegistrationFormData>; // Specific to RegistrationFormData
}

interface PasswordFieldProps {
  label: string;
  name: keyof RegistrationFormData; // Ensures only valid fields from RegistrationFormData are used
  show: boolean;
  toggle: () => void;
  register: UseFormRegister<RegistrationFormData>; // Specific to RegistrationFormData
  errors: FieldErrors<RegistrationFormData>; // Specific to RegistrationFormData
}

interface SuccessModalProps {
  onClose: () => void;
}

const Field = memo(({ label, name, type, options, register, required, errors }: FieldProps) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>{label}</label>
    {type === "select" ? (
      <select id={name} {...register(name, { required })} className="w-full p-2 border rounded">
        {options?.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    ) : type === "textarea" ? (
      <textarea id={name} {...register(name, { required })} className="w-full p-2 border rounded" />
    ) : (
      <input id={name} type={type} {...register(name, { required })} className="w-full p-2 border rounded" />
    )}
    {errors[name] && <p className="text-red-500 text-xs mt-1">This field is required.</p>}
  </div>
));
Field.displayName = "Field";

const PasswordField = memo(({ label, name, show, toggle, register, errors }: PasswordFieldProps) => (
  <div className="relative mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>{label}</label>
    <input type={show ? "text" : "password"} {...register(name, { required: true })} className="w-full p-2 border rounded pr-10" />
    <div onClick={toggle} className="absolute top-3 right-3 cursor-pointer text-gray-500">
      {show ? <FaEyeSlash /> : <FaEye />}
    </div>
    {errors[name] && <p className="text-red-500 text-xs mt-1">This field is required.</p>}
  </div>
));
PasswordField.displayName = "PasswordField";

const SuccessModal = memo(({ onClose }: SuccessModalProps) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-md shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4">Registration Successful!</h2>
      <p>You will now be redirected to the login page.</p>
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        OK
      </button>
    </div>
  </div>
));
SuccessModal.displayName = "SuccessModal";

const RegistrationForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<RegistrationFormData>();
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [portfolioPreviews, setPortfolioPreviews] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: RegistrationFormData) => {
    if (data.password !== data.confirmPassword) {
      setFirebaseError('Passwords do not match');
      return;
    }

    setIsSubmitting(true);
    setFirebaseError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);

      const portfolioImageUrls: string[] = [];
      if (data.portfolioImages && data.portfolioImages.length > 0) {
        const portfolioImagesArray = Array.from(data.portfolioImages).slice(0, 4);
        for (const image of portfolioImagesArray) {
          const imageRef = ref(storage, `portfolioImages/${userCredential.user.uid}/${image.name}`);
          await uploadBytes(imageRef, image);
          const imageUrl = await getDownloadURL(imageRef);
          portfolioImageUrls.push(imageUrl);
        }
      }

      await setDoc(doc(db, 'users', userCredential.user.uid), {
        uid: userCredential.user.uid,
        ...data,
        portfolioImages: portfolioImageUrls,
      });

      setIsModalOpen(true);
    } catch (err) {
      setFirebaseError('Error creating user: ' + (err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePortfolioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).slice(0, 4);
      setPortfolioPreviews(files.map(file => URL.createObjectURL(file)));
      setValue("portfolioImages", e.target.files);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-16">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-xl rounded-lg p-8 w-full max-w-3xl space-y-6">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-8">Complete Registration Form</h2>

        {/* Portfolio Image Upload */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-gray-700">Upload Portfolio Images (Max 4)</label>
          <input type="file" accept="image/*" multiple onChange={handlePortfolioChange} className="w-full p-2 bg-transparent outline-none" />
          <div className="flex space-x-4 mt-4">
            {portfolioPreviews.map((src, index) => (
              <div key={index} className="relative">
              <Image 
                    src={src} 
                    alt={`Portfolio Preview ${index + 1}`} 
                    width={96} // Example width in pixels
                    height={96} // Example height in pixels
                    className="w-24 h-24 object-cover rounded-md border-2 border-gray-300 shadow-md" 
                  />                <button
                  className="absolute top-1 right-1 text-red-600"
                  onClick={() => setPortfolioPreviews(portfolioPreviews.filter((_, i) => i !== index))}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Gender" name="gender" type="select" options={["Male", "Female", "Other"]} register={register} required errors={errors} />
          <Field label="Marital Status" name="maritalStatus" type="select" options={["Single", "Married", "Divorced", "Widowed"]} register={register} required errors={errors} />
          <Field label="Name" name="name" type="text" register={register} required errors={errors} />
          <Field label="Date of Birth" name="dob" type="date" register={register} required errors={errors} />
          <Field label="Place of Birth" name="placeOfBirth" type="text" register={register} required errors={errors} />
          <Field label="Time of Birth" name="timeOfBirth" type="text" register={register} required errors={errors} />
          <Field label="Height" name="height" type="text" register={register} required errors={errors} />
          <Field label="Complexion" name="complexion" type="text" register={register} required errors={errors} />
          <Field label="Caste" name="caste" type="text" register={register} required errors={errors} />
          <Field label="Occupation" name="occupation" type="text" register={register} required errors={errors} />
          <Field label="Income" name="income" type="text" register={register} required errors={errors} />
          <Field label="Education" name="education" type="text" register={register} required errors={errors} />
          <Field label="Father's Name" name="fathersName" type="text" register={register} required errors={errors} />
          <Field label="Father's Occupation" name="fathersOccupation" type="text" register={register} required errors={errors} />
          <Field label="Mother's Name" name="mothersName" type="text" register={register} required errors={errors} />
          <Field label="Mother's Occupation" name="mothersOccupation" type="text" register={register} required errors={errors} />
          <Field label="Siblings" name="siblings" type="text" register={register} required errors={errors} />
          <Field label="Phone" name="phone" type="tel" register={register} required errors={errors} />
          <Field label="Email" name="email" type="email" register={register} required errors={errors} />
          <PasswordField label="Password" name="password" show={showPassword} toggle={() => setShowPassword(!showPassword)} register={register} errors={errors} />
          <PasswordField label="Confirm Password" name="confirmPassword" show={showConfirmPassword} toggle={() => setShowConfirmPassword(!showConfirmPassword)} register={register} errors={errors} />
          <Field label="Address" name="address" type="textarea" register={register} required errors={errors} />
        </div>

        {firebaseError && <p className="text-red-500 text-center">{firebaseError}</p>}

        <button type="submit" disabled={isSubmitting} className="w-full bg-purple-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors flex items-center justify-center">
          {isSubmitting ? <FaSpinner className="animate-spin mr-2" /> : 'Register'}
        </button>

      <p className="text-center mt-4">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
      </p>
        {isModalOpen && <SuccessModal onClose={() => { setIsModalOpen(false); router.push('/login'); }} />}
      </form>
    </div>
  );
};

export default RegistrationForm;
