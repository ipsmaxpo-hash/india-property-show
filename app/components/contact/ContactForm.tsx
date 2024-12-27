"use client"

import React, { useState } from "react"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) newErrors.phone = "Phone number is invalid"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log("Form submitted successfully:", formData)
        setSubmitMessage("Thank you for reaching out. We'll get back to you soon!")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } catch (error) {
        setSubmitMessage("There was a problem sending your message. Please try again.")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <section id="contact-form" className="w-full max-w-3xl mx-auto p-8 space-y-8">
  <div className="space-y-4 text-center">
    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">
      Have a question or want to learn more? Get in touch with us.
    </p>
  </div>
  <form onSubmit={handleSubmit} className="space-y-8">
    <div>
      <label htmlFor="name" className="block text-lg font-medium text-gray-700">
        Full Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mt-2 block w-full rounded-lg border-gray-300 shadow-md px-4 py-3 text-lg focus:border-indigo-400 focus:ring focus:ring-indigo-300"
        placeholder="John Doe"
      />
      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
    </div>
    <div>
      <label htmlFor="email" className="block text-lg font-medium text-gray-700">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-2 block w-full rounded-lg border-gray-300 shadow-md px-4 py-3 text-lg focus:border-indigo-400 focus:ring focus:ring-indigo-300"
        placeholder="john@example.com"
      />
      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
    </div>
    <div>
      <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="mt-2 block w-full rounded-lg border-gray-300 shadow-md px-4 py-3 text-lg focus:border-indigo-400 focus:ring focus:ring-indigo-300"
        placeholder="+1234567890"
      />
      <p className="mt-1 text-sm text-gray-500">Include country code for international numbers.</p>
      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
    </div>
    <div>
      <label htmlFor="message" className="block text-lg font-medium text-gray-700">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={6}
        className="mt-2 block w-full rounded-lg border-gray-300 shadow-md px-4 py-3 text-lg focus:border-indigo-400 focus:ring focus:ring-indigo-300"
        placeholder="Your message here..."
      ></textarea>
      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
    </div>
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full px-6 py-4 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
      ) : (
        "Send Message"
      )}
    </button>
  </form>
  {submitMessage && (
    <div className={`mt-4 p-6 rounded-lg text-lg ${submitMessage.includes("problem") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
      {submitMessage}
    </div>
  )}
</section>

  )
}

export default ContactForm