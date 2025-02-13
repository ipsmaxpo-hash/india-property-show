'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Removed countries array

const exhibitorSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  city: z.string().min(2, "City name must be at least 2 characters"),
  contactPerson: z.string().min(2, "Contact person name must be at least 2 characters"),
  designation: z.string().min(2, "Designation must be at least 2 characters"),
  mobileNumber: z.string().regex(/^\+?[1-9]\d{7,14}$/, "Please enter a valid mobile number"),
  email: z.string().email("Please enter a valid email address"),
  // eventType: z.literal('India Property Show (Bahrain)'),
})

const visitorSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  city: z.string().min(2, "Please enter your city"),
  email: z.string().email("Please enter a valid email address"),
  mobileNumber: z.string().regex(/^\+?[1-9]\d{7,14}$/, "Please enter a valid mobile number"),
  budget: z.string().min(1, "Please enter your preferred budget"),
});

type ExhibitorFormData = z.infer<typeof exhibitorSchema>
type VisitorFormData = z.infer<typeof visitorSchema>

export function RegistrationForms() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [registrationType, setRegistrationType] = useState<'exhibitor' | 'visitor' | null>(null)

  // const {
  //   register: registerExhibitor,
  //   handleSubmit: handleSubmitExhibitor,
  //   formState: { errors: exhibitorErrors },
  //   reset: resetExhibitor,
  // } = useForm<ExhibitorFormData>({
  //   resolver: zodResolver(exhibitorSchema),
   
  // })

  const {
    register: registerVisitor,
    handleSubmit: handleSubmitVisitor,
    formState: { errors: visitorErrors },
    reset: resetVisitor,
  } = useForm<VisitorFormData>({
    resolver: zodResolver(visitorSchema),
   
  })

  const handleExhibitorSubmit = async (data: ExhibitorFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'exhibitor', ...data }),
      })
      if (!response.ok) throw new Error('Failed to submit form')
      setShowThankYou(true)
      setRegistrationType('exhibitor')
    } catch (error) {
      console.error('Error submitting exhibitor form:', error)
      toast.error('Failed to submit exhibitor form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVisitorSubmit = async (data: VisitorFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'visitor', ...data }),
      })
      if (!response.ok) throw new Error('Failed to submit form')
      setShowThankYou(true)
      setRegistrationType('visitor')
    } catch (error) {
      console.error('Error submitting visitor form:', error)
      toast.error('Failed to submit visitor form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForms = () => {
    // resetExhibitor()
    resetVisitor()
    setShowThankYou(false)
    setRegistrationType(null)
  }

  if (showThankYou) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You for Registering!</h2>
          <p className="text-lg mb-4">
            We appreciate your interest in the India Property Show as{' '}
            {registrationType === 'exhibitor' ? 'an exhibitor' : 'a visitor'}.
          </p>
          <p className="text-lg mb-6">We will get back to you soon with more information.</p>
          <button
            onClick={resetForms}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register Another
          </button>
        </div>
      </div>
    )
  }

  return (
    // <div className="container mx-auto px-4 py-8">
    //   <div className="grid md:grid-cols-2 gap-8">
    //     {/* <div className="bg-white shadow-md rounded-lg p-6">
    //       <h2 className="text-2xl font-bold mb-6">Exhibitor Registration</h2> */}
    //       {/* <form onSubmit={handleSubmitExhibitor(handleExhibitorSubmit)} className="space-y-4">
    //         <div>
    //           <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
    //           <input
    //             type="text"
    //             id="companyName"
    //             {...registerExhibitor('companyName')}
    //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             placeholder="Enter company name"
    //           />
    //           {exhibitorErrors.companyName && (
    //             <p className="mt-1 text-sm text-red-600">{exhibitorErrors.companyName.message}</p>
    //           )}
    //         </div>
    //         <div>
    //           <label htmlFor="exhibitorCity" className="block text-sm font-medium text-gray-700 mb-1">City</label>
    //           <input
    //             type="text"
    //             id="exhibitorCity"
    //             {...registerExhibitor('city')}
    //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             placeholder="Enter city"
    //           />
    //           {exhibitorErrors.city && (
    //             <p className="mt-1 text-sm text-red-600">{exhibitorErrors.city.message}</p>
    //           )}
    //         </div>
    //         <div>
    //           <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
    //           <input
    //             type="text"
    //             id="contactPerson"
    //             {...registerExhibitor('contactPerson')}
    //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             placeholder="Enter contact person"
    //           />
    //           {exhibitorErrors.contactPerson && (
    //             <p className="mt-1 text-sm text-red-600">{exhibitorErrors.contactPerson.message}</p>
    //           )}
    //         </div>
    //         <div>
    //           <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
    //           <input
    //             type="text"
    //             id="designation"
    //             {...registerExhibitor('designation')}
    //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             placeholder="Enter designation"
    //           />
    //           {exhibitorErrors.designation && (
    //             <p className="mt-1 text-sm text-red-600">{exhibitorErrors.designation.message}</p>
    //           )}
    //         </div>
    //         <div>
    //           <label htmlFor="exhibitorMobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
    //           <input
    //             type="tel"
    //             id="exhibitorMobile"
    //             {...registerExhibitor('mobileNumber')}
    //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             placeholder="Enter mobile number"
    //           />
    //           {exhibitorErrors.mobileNumber && (
    //             <p className="mt-1 text-sm text-red-600">{exhibitorErrors.mobileNumber.message}</p>
    //           )}
    //         </div>
    //         <div>
    //           <label htmlFor="exhibitorEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
    //           <input
    //             type="email"
    //             id="exhibitorEmail"
    //             {...registerExhibitor('email')}
    //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             placeholder="Enter email"
    //           />
    //           {exhibitorErrors.email && (
    //             <p className="mt-1 text-sm text-red-600">{exhibitorErrors.email.message}</p>
    //           )}
    //         </div>
    //         <button
    //           type="submit"
    //           disabled={isSubmitting}
    //           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
    //         >
    //           {isSubmitting ? 'Submitting...' : 'Register as Exhibitor'}
    //         </button>
    //       </form>
    //     </div> */}

<div className="flex justify-center items-center min-h-screen">
  <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center">Visitor Registration</h2>
    <form onSubmit={handleSubmitVisitor(handleVisitorSubmit)} className="space-y-4">
      <div>
        <label htmlFor="visitorName" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="visitorName"
          {...registerVisitor('name')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
        {visitorErrors.name && <p className="mt-1 text-sm text-red-600">{visitorErrors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="visitorMobile" className="block text-sm font-medium text-gray-700 mb-1">
          Mobile Number
        </label>
        <input
          type="tel"
          id="visitorMobile"
          {...registerVisitor('mobileNumber')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your mobile number"
        />
        {visitorErrors.mobileNumber && <p className="mt-1 text-sm text-red-600">{visitorErrors.mobileNumber.message}</p>}
      </div>

      <div>
        <label htmlFor="visitorEmail" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="visitorEmail"
          {...registerVisitor('email')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
        {visitorErrors.email && <p className="mt-1 text-sm text-red-600">{visitorErrors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="visitorCity" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred City
        </label>
        <input
          type="text"
          id="visitorCity"
          {...registerVisitor('city')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your city"
        />
        {visitorErrors.city && <p className="mt-1 text-sm text-red-600">{visitorErrors.city.message}</p>}
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Budget
        </label>
        <input
          type="text"
          id="budget"
          {...registerVisitor('budget')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your preferred budget"
        />
        {visitorErrors.budget && <p className="mt-1 text-sm text-red-600">{visitorErrors.budget.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Register as Visitor'}
      </button>
    </form>
  </div>
</div>

  )
}

