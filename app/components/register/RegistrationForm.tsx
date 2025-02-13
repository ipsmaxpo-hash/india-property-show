"use client"

import { useState } from "react"
import { toast } from "react-hot-toast"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const visitorSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  city: z.string().min(2, "Please enter your city"),
  email: z.string().email("Please enter a valid email address"),
  mobileNumber: z.string().regex(/^\+?[1-9]\d{7,14}$/, "Please enter a valid mobile number"),
  budget: z.string().min(1, "Please enter your preferred budget"),
})

type VisitorFormData = z.infer<typeof visitorSchema>

export function RegistrationForms() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VisitorFormData>({
    resolver: zodResolver(visitorSchema),
  })

  const handleVisitorSubmit = async (data: VisitorFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "visitor", ...data }),
      })
      if (!response.ok) throw new Error("Failed to submit form")
      setShowThankYou(true)
    } catch (error) {
      console.error("Error submitting visitor form:", error)
      toast.error("Failed to submit visitor form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    reset()
    setShowThankYou(false)
  }

  if (showThankYou) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You for Registering!</h2>
          <p className="text-lg mb-4">We appreciate your interest in the India Property Show as a visitor.</p>
          <p className="text-lg mb-6">We will get back to you soon with more information.</p>
          <button
            onClick={resetForm}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Visitor Registration</h2>
        <form onSubmit={handleSubmit(handleVisitorSubmit)} className="space-y-4">
          <div>
            <label htmlFor="visitorName" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="visitorName"
              {...register("name")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="visitorMobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="visitorMobile"
              {...register("mobileNumber")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your mobile number"
            />
            {errors.mobileNumber && <p className="mt-1 text-sm text-red-600">{errors.mobileNumber.message}</p>}
          </div>

          <div>
            <label htmlFor="visitorEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="visitorEmail"
              {...register("email")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="visitorCity" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred City
            </label>
            <input
              type="text"
              id="visitorCity"
              {...register("city")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your city"
            />
            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Budget
            </label>
            <input
              type="text"
              id="budget"
              {...register("budget")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your preferred budget"
            />
            {errors.budget && <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Register as Visitor"}
          </button>
        </form>
      </div>
    </div>
  )
}

