
import React from 'react';

const integrations = [
  { name: 'Zapier', logo: '⚡', description: 'Connect with 5000+ apps' },
  { name: 'Stripe', logo: '💳', description: 'Secure payment processing' },
  { name: 'PayPal', logo: '💰', description: 'Alternative payment method' },
  { name: 'Google Calendar', logo: '📅', description: 'Two-way calendar sync' },
  { name: 'Zoom', logo: '📹', description: 'Virtual class integration' },
  { name: 'HubSpot', logo: '🎯', description: 'CRM and marketing tools' },
  { name: 'Mailchimp', logo: '📧', description: 'Email marketing campaigns' },
  { name: 'Slack', logo: '💬', description: 'Team communication' }
];

const IntegrationsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white" id="integrations">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Seamless
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Integrations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect FlowTime with your favorite tools and streamline your workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group cursor-pointer transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {integration.logo}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">And many more integrations available through our API</p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 rounded-full">
            <span className="text-purple-700 font-medium">🔌 API Access Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
