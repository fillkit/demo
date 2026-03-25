import { useState, FormEvent } from 'react';
import DemoBanner from '../components/DemoBanner';

export default function DetectionEngineTest() {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Detection Engine Test submitted:', formData);
    alert('Form submitted! Check console for data.');
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClass =
    'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DemoBanner sourceUrl="https://github.com/fillkit/demo/blob/main/react/src/pages/DetectionEngineTest.tsx" />
      <h1 className="text-3xl font-bold mb-2">Detection Engine Test</h1>
      <p className="text-gray-600 mb-8">
        Exercises all detection engine improvements: autocomplete attribute
        scoring, inputmode signals, confidence thresholds, value deduplication,
        form context bias, and sibling analysis.
      </p>

      {/* Section 1: Autocomplete Attribute Detection */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-semibold mb-2">
          1. Autocomplete Attribute Detection
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Fields use only the <code>autocomplete</code> attribute for detection
          — no name, id, or placeholder hints. Detection should reach ~0.9
          confidence from autocomplete alone.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Given Name (autocomplete only)
              </label>
              <input
                type="text"
                name="ac_test_1"
                autoComplete="given-name"
                value={formData.ac_test_1 || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Family Name (autocomplete only)
              </label>
              <input
                type="text"
                name="ac_test_2"
                autoComplete="family-name"
                value={formData.ac_test_2 || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (autocomplete only)
              </label>
              <input
                type="text"
                name="ac_test_3"
                autoComplete="email"
                value={formData.ac_test_3 || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telephone (autocomplete only)
              </label>
              <input
                type="text"
                name="ac_test_4"
                autoComplete="tel"
                value={formData.ac_test_4 || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shipping Street (compound token)
              </label>
              <input
                type="text"
                name="ac_test_5"
                autoComplete="shipping street-address"
                value={formData.ac_test_5 || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Billing Postal Code (compound)
              </label>
              <input
                type="text"
                name="ac_test_6"
                autoComplete="billing postal-code"
                value={formData.ac_test_6 || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Organization (autocomplete only)
              </label>
              <input
                type="text"
                name="ac_test_7"
                autoComplete="organization"
                value={formData.ac_test_7 || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Section 2: inputmode Attribute Detection */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-semibold mb-2">
          2. inputmode Attribute Detection
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Fields use <code>inputmode</code> as a supporting signal. Combined
          with other signals, inputmode should boost confidence by +0.15.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (inputmode="email")
              </label>
              <input
                type="text"
                name="im_email"
                inputMode="email"
                autoComplete="email"
                value={formData.im_email || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone (inputmode="tel")
              </label>
              <input
                type="text"
                name="im_phone"
                inputMode="tel"
                autoComplete="tel"
                value={formData.im_phone || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postal Code (inputmode="numeric")
              </label>
              <input
                type="text"
                name="im_postal"
                inputMode="numeric"
                autoComplete="postal-code"
                value={formData.im_postal || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL (inputmode="url")
              </label>
              <input
                type="text"
                name="im_url"
                inputMode="url"
                autoComplete="url"
                value={formData.im_url || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Credit Card (inputmode="numeric")
              </label>
              <input
                type="text"
                name="im_cc"
                inputMode="numeric"
                autoComplete="cc-number"
                value={formData.im_cc || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Section 3: Confidence Threshold */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-semibold mb-2">
          3. Confidence Threshold
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Ambiguous fields with generic names should be skipped at the default
          threshold (0.3). Well-identified fields should always be filled.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ambiguous field (name="x")
              </label>
              <input
                type="text"
                name="x"
                value={formData.x || ''}
                onChange={handleChange}
                className={inputClass}
              />
              <p className="text-xs text-gray-400 mt-1">
                Should be skipped — low confidence
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Clear field (name="email", type="email")
              </label>
              <input
                type="email"
                name="email_threshold"
                value={formData.email_threshold || ''}
                onChange={handleChange}
                className={inputClass}
              />
              <p className="text-xs text-gray-400 mt-1">
                Should be filled — high confidence
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Another ambiguous field (name="data1")
              </label>
              <input
                type="text"
                name="data1"
                value={formData.data1 || ''}
                onChange={handleChange}
                className={inputClass}
              />
              <p className="text-xs text-gray-400 mt-1">
                Should be skipped — no clear semantic type
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Explicit type override
              </label>
              <input
                type="text"
                name="mystery"
                data-fillkit-type="phone"
                value={formData.mystery || ''}
                onChange={handleChange}
                className={inputClass}
              />
              <p className="text-xs text-gray-400 mt-1">
                Should always fill — data-fillkit-type gives confidence 1.0
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* Section 4: Value Deduplication */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-semibold mb-2">4. Value Deduplication</h3>
        <p className="text-sm text-gray-500 mb-4">
          Multiple fields with the same semantic type should get unique values.
          Compare the values after filling — they should differ.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name #1
              </label>
              <input
                type="text"
                name="first_name_a"
                autoComplete="given-name"
                value={formData.first_name_a || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name #2
              </label>
              <input
                type="text"
                name="first_name_b"
                autoComplete="given-name"
                value={formData.first_name_b || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email #1
              </label>
              <input
                type="email"
                name="email_dedup_a"
                value={formData.email_dedup_a || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email #2
              </label>
              <input
                type="email"
                name="email_dedup_b"
                value={formData.email_dedup_b || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Section 5: Form Context Bias */}
      <div className="space-y-6 mb-8">
        <h3 className="text-xl font-semibold">5. Form Context Bias</h3>
        <p className="text-sm text-gray-500 mb-4">
          The same generic field name behaves differently based on the
          surrounding form context. The <code>name="name"</code> field should
          bias toward card holder on checkout forms and toward full name on
          contact forms.
        </p>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-lg font-medium mb-3">
            Checkout Form (action="/checkout")
          </h4>
          <form
            action="/checkout"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name on Card
                </label>
                <input
                  type="text"
                  name="name"
                  autoComplete="cc-name"
                  value={formData.checkout_name || ''}
                  onChange={e =>
                    setFormData(prev => ({
                      ...prev,
                      checkout_name: e.target.value,
                    }))
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cc_number"
                  autoComplete="cc-number"
                  inputMode="numeric"
                  value={formData.checkout_cc || ''}
                  onChange={e =>
                    setFormData(prev => ({
                      ...prev,
                      checkout_cc: e.target.value,
                    }))
                  }
                  className={inputClass}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry
                </label>
                <input
                  type="text"
                  name="cc_exp"
                  autoComplete="cc-exp"
                  value={formData.checkout_exp || ''}
                  onChange={e =>
                    setFormData(prev => ({
                      ...prev,
                      checkout_exp: e.target.value,
                    }))
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  name="cc_csc"
                  autoComplete="cc-csc"
                  inputMode="numeric"
                  value={formData.checkout_cvv || ''}
                  onChange={e =>
                    setFormData(prev => ({
                      ...prev,
                      checkout_cvv: e.target.value,
                    }))
                  }
                  className={inputClass}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-lg font-medium mb-3">
            Contact Form (action="/contact")
          </h4>
          <form
            action="/contact"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.contact_name || ''}
                  onChange={e =>
                    setFormData(prev => ({
                      ...prev,
                      contact_name: e.target.value,
                    }))
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.contact_email || ''}
                  onChange={e =>
                    setFormData(prev => ({
                      ...prev,
                      contact_email: e.target.value,
                    }))
                  }
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.contact_message || ''}
                onChange={e =>
                  setFormData(prev => ({
                    ...prev,
                    contact_message: e.target.value,
                  }))
                }
                className={inputClass}
              />
            </div>
          </form>
        </div>
      </div>

      {/* Section 6: Sibling Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-semibold mb-2">6. Sibling Analysis</h3>
        <p className="text-sm text-gray-500 mb-4">
          When credit card fields appear alongside an ambiguous "name" field,
          sibling analysis should refine the name detection to card holder name.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                name="sibling_cc_number"
                autoComplete="cc-number"
                inputMode="numeric"
                value={formData.sibling_cc_number || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry
              </label>
              <input
                type="text"
                name="sibling_cc_exp"
                autoComplete="cc-exp"
                value={formData.sibling_cc_exp || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                name="sibling_cc_csc"
                autoComplete="cc-csc"
                inputMode="numeric"
                value={formData.sibling_cc_csc || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cardholder (ambiguous name="cardholder")
              </label>
              <input
                type="text"
                name="cardholder"
                autoComplete="cc-name"
                value={formData.cardholder || ''}
                onChange={handleChange}
                className={inputClass}
              />
              <p className="text-xs text-gray-400 mt-1">
                Sibling analysis should detect this as card holder name
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
