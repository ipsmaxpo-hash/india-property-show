'use client'

import { useState } from 'react'

const countries = ["Bahrain", "India", "UAE", "Saudi Arabia", "Kuwait", "Oman", "Qatar"]

export function RegistrationForms() {
  const [exhibitorForm, setExhibitorForm] = useState({
    companyName: '',
    country: '',
    contactPerson: '',
    designation: '',
    mobileNumber: '',
    email: '',
    eventType: 'India Property Show (Bahrain)'
  })

  const [visitorForm, setVisitorForm] = useState({
    name: '',
    country: '',
    email: '',
    mobileNumber: '',
    eventType: 'India Property Show (Bahrain)',
    purposeOfVisit: ''
  })

  const handleExhibitorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setExhibitorForm({ ...exhibitorForm, [e.target.name]: e.target.value })
  }

  const handleVisitorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setVisitorForm({ ...visitorForm, [e.target.name]: e.target.value })
  }

  const handleExhibitorSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Exhibitor form submitted:', exhibitorForm)
    // Add your form submission logic here
  }

  const handleVisitorSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Visitor form submitted:', visitorForm)
    // Add your form submission logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Exhibitor Registration</h2>
          <form onSubmit={handleExhibitorSubmit} className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={exhibitorForm.companyName}
                onChange={handleExhibitorChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company name"
                required
              />
            </div>
            <div>
              <label htmlFor="exhibitorCountry" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select
                id="exhibitorCountry"
                name="country"
                value={exhibitorForm.country}
                onChange={handleExhibitorChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={exhibitorForm.contactPerson}
                onChange={handleExhibitorChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter contact person"
                required
              />
            </div>
            <div>
              <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={exhibitorForm.designation}
                onChange={handleExhibitorChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter designation"
                required
              />
            </div>
            <div>
              <label htmlFor="exhibitorMobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                id="exhibitorMobile"
                name="mobileNumber"
                value={exhibitorForm.mobileNumber}
                onChange={handleExhibitorChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter mobile number"
                required
              />
            </div>
            <div>
              <label htmlFor="exhibitorEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="exhibitorEmail"
                name="email"
                value={exhibitorForm.email}
                onChange={handleExhibitorChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label htmlFor="exhibitorEventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
              <input
                type="text"
                id="exhibitorEventType"
                name="eventType"
                value={exhibitorForm.eventType}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                readOnly
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register as Exhibitor
            </button>
          </form>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Visitor Registration</h2>
          <form onSubmit={handleVisitorSubmit} className="space-y-4">
            <div>
              <label htmlFor="visitorName" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="visitorName"
                name="name"
                value={visitorForm.name}
                onChange={handleVisitorChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="visitorCountry" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select
                id="visitorCountry"
                name="country"
                value={visitorForm.country}
                onChange={handleVisitorChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="visitorEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="visitorEmail"
                name="email"
                value={visitorForm.email}
                onChange={handleVisitorChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="visitorMobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                id="visitorMobile"
                name="mobileNumber"
                value={visitorForm.mobileNumber}
                onChange={handleVisitorChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div>
              <label htmlFor="visitorEventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
              <input
                type="text"
                id="visitorEventType"
                name="eventType"
                value={visitorForm.eventType}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="purposeOfVisit" className="block text-sm font-medium text-gray-700 mb-1">Purpose of Visit</label>
              <input
                type="text"
                id="purposeOfVisit"
                name="purposeOfVisit"
                value={visitorForm.purposeOfVisit}
                onChange={handleVisitorChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter purpose of visit"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register as Visitor
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

