import DocSection from '../components/DocSection'

const profileFields = [
  ['email', 'Primary email of the user'],
  ['secondary_email', 'Secondary contact email'],
  ['phone', 'Phone number'],
  ['first_name', "User's first name"],
  ['last_name', "User's last name"],
  ['locale', 'Language/locale code'],
  ['timezone', 'User timezone'],
  ['dob', 'Date of birth'],
  ['gender', 'Gender identity'],
  ['address', 'User address'],
  ['zip', 'Postal/ZIP code'],
  ['city', 'City'],
  ['state', 'State'],
  ['country', 'Country'],
  ['linkedin_url', 'LinkedIn profile URL'],
  ['job_title', 'Designation/role'],
  ['company_name', 'Company name'],
  ['company_website', 'Website URL'],
]

const standardEvents = [
  ['application_approved', 'Application is approved by system or admin'],
  ['book_appointment', 'User books an appointment slot'],
  ['complete_registration', 'User completes account registration'],
  ['contact', 'User sends a contact or support request'],
  ['converted_lead', 'Lead successfully converted'],
  ['key_page_view', 'User views an important page'],
  ['page_view', 'User views a page'],
  ['purchase', 'User completes a purchase'],
  ['qualified_lead', 'Lead meets qualification criteria'],
  ['request_quote', 'User requests a quote or pricing'],
  ['signup', 'User creates a new account'],
  ['start_trial', 'User starts a free trial'],
  ['submit_application', 'User submits an application form'],
  ['submit_lead_form', 'User submits a lead capture form'],
  ['subscribe', 'User subscribes to a plan or newsletter'],
  ['add_to_cart', 'User adds an item to cart'],
  ['add_to_wishlist', 'User adds an item to wishlist'],
  ['checkout_started', 'User starts checkout flow'],
  ['customize_product', 'User customizes product options'],
  ['search', 'User performs a search query'],
  ['add_payment_info', 'User saves or enters payment details'],
  ['refunded', 'An order payment is refunded'],
  ['order_fullfilled', 'Order is fulfilled and processed for delivery'],
]

export default function StandardAttributes({ isDarkMode = false }) {
  return (
    <DocSection id="standard-attributes" title="Standard Attributes">
      <p className={`mb-4 text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Use standard profile fields and event names for consistent analytics and user journeys.
      </p>
      <h3 id="standard-profile-fields" className={`scroll-mt-40 mb-2 text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Standard Profile Fields</h3>
      <div className={`scroll-mt-40 mb-8 overflow-x-auto border rounded-lg ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <table className="min-w-full text-left text-base">
          <thead className={`${isDarkMode ? 'bg-orange-600' : 'bg-orange-400'} text-white`}>
            <tr>
              <th className="px-4 py-3">Field</th>
              <th className="px-4 py-3">Description</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-gray-800 bg-black' : 'divide-gray-200 bg-white'}`}>
            {profileFields.map(([field, description]) => (
              <tr key={field}>
                <td className={`px-4 py-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{field}</td>
                <td className={`px-4 py-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 id="standard-events" className={`scroll-mt-40 mb-2 text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-black'}`}>Standard Events</h3>
      <div className={`overflow-x-auto border rounded-lg ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <table className="min-w-full text-left text-base">
          <thead className={`${isDarkMode ? 'bg-orange-600' : 'bg-orange-400'} text-white`}>
            <tr>
              <th className="px-4 py-3">Event Name</th>
              <th className="px-4 py-3">Description</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-gray-800 bg-black' : 'divide-gray-200 bg-white'}`}>
            {standardEvents.map(([eventName, description]) => (
              <tr key={eventName}>
                <td className={`px-4 py-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{eventName}</td>
                <td className={`px-4 py-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DocSection>
  )
}
