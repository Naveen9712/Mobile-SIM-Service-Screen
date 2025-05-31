import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

const ImmiHubSIMService = () => {
  const [selectedCarrier, setSelectedCarrier] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedDelivery, setSelectedDelivery] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState('carrier');
  const [showSuccess, setShowSuccess] = useState(false);

  const carriers = [
    {
      id: 'att',
      name: 'AT&T Network',
      logo: 'AT&T',
      description: 'Nationwide 5G coverage',
      coverage: 95,
      color: 'bg-blue-900',
      features: ['Best for Cities', '5G Ultra']
    },
    {
      id: 'tmobile',
      name: 'T-Mobile Network',
      logo: 'T-Mobile',
      description: 'Fastest 5G speeds',
      coverage: 92,
      color: 'bg-pink-600',
      features: ['Fastest 5G', 'Free International'],
      badge: 'Best Value'
    },
    {
      id: 'verizon',
      name: 'Verizon Network',
      logo: 'Verizon',
      description: 'Most reliable network',
      coverage: 98,
      color: 'bg-red-600',
      features: ['Best Coverage', 'Premium Network']
    }
  ];

  const plans = {
    att: [
      {
        id: 'starter',
        name: '5GB Starter Plan',
        price: '$20',
        features: [
          '5GB of 5G/4G LTE Data',
          'Unlimited Talk & Text',
          'Free calls to India & Mexico',
          'No contract required'
        ]
      },
      {
        id: 'popular',
        name: '15GB Value Plan',
        price: '$35',
        features: [
          '15GB of 5G/4G LTE Data',
          'Unlimited Talk & Text',
          'Free calls to 50+ countries',
          'Mobile hotspot included'
        ],
        badge: 'Most Popular'
      },
      {
        id: 'unlimited',
        name: 'Unlimited Pro',
        price: '$50',
        features: [
          'Unlimited 5G Data',
          'Unlimited Talk & Text',
          'Free international calls',
          '5G Mobile hotspot (10GB)',
          'International roaming'
        ]
      }
    ],
    tmobile: [
      {
        id: 'starter',
        name: '5GB Starter Plan',
        price: '$18',
        features: [
          '5GB of 5G/4G LTE Data',
          'Unlimited Talk & Text',
          'Free calls to India & Mexico',
          'No contract required'
        ]
      },
      {
        id: 'popular',
        name: '15GB Value Plan',
        price: '$32',
        features: [
          '15GB of 5G/4G LTE Data',
          'Unlimited Talk & Text',
          'Free calls to 50+ countries',
          'Mobile hotspot included'
        ],
        badge: 'Most Popular'
      },
      {
        id: 'unlimited',
        name: 'Unlimited Pro',
        price: '$45',
        features: [
          'Unlimited 5G Data',
          'Unlimited Talk & Text',
          'Free international calls',
          '5G Mobile hotspot (10GB)',
          'International roaming'
        ]
      }
    ],
    verizon: [
      {
        id: 'starter',
        name: '5GB Starter Plan',
        price: '$25',
        features: [
          '5GB of 5G/4G LTE Data',
          'Unlimited Talk & Text',
          'Free calls to India & Mexico',
          'No contract required'
        ]
      },
      {
        id: 'popular',
        name: '15GB Value Plan',
        price: '$40',
        features: [
          '15GB of 5G/4G LTE Data',
          'Unlimited Talk & Text',
          'Free calls to 50+ countries',
          'Mobile hotspot included'
        ],
        badge: 'Most Popular'
      },
      {
        id: 'unlimited',
        name: 'Unlimited Pro',
        price: '$60',
        features: [
          'Unlimited 5G Data',
          'Unlimited Talk & Text',
          'Free international calls',
          '5G Mobile hotspot (10GB)',
          'International roaming'
        ]
      }
    ]
  };

  const handleCarrierSelect = (carrierId: string) => {
    setSelectedCarrier(carrierId);
    setCurrentStep('plan');
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setCurrentStep('delivery');
  };

  const handleDeliverySelect = (deliveryType: string) => {
    setSelectedDelivery(deliveryType);
  };

  const handleContinue = () => {
    if (currentStep === 'delivery' && selectedDelivery) {
      setShowSuccess(true);
    }
  };

  const handleBack = () => {
    if (showSuccess) {
      setShowSuccess(false);
      return;
    }

    if (currentStep === 'delivery') {
      setSelectedDelivery(null);
      setCurrentStep('plan');
    } else if (currentStep === 'plan') {
      setSelectedPlan(null);
      setCurrentStep('carrier');
    } else {
      console.log('Navigate to previous screen');
    }
  };

  const getCarrierDetails = (carrierId: string) => {
    return carriers.find(c => c.id === carrierId);
  };

  const getButtonText = () => {
    if (!selectedCarrier) return 'Select Network to Continue';
    if (!selectedPlan) return 'Continue to Plan Selection';
    if (!selectedDelivery) return 'Continue to Delivery Method';
    return 'Continue to Verification';
  };

  if (showSuccess) {
    const carrier = getCarrierDetails(selectedCarrier as string);
    return (
      <div className="max-w-[390px] mx-auto bg-white min-h-screen shadow-2xl">
        <div className="text-center p-10">
          <button
            onClick={handleBack}
            className="inline-flex items-center bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm mb-8 hover:bg-gray-300 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </button>
          
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <span className="text-white text-4xl">✓</span>
          </div>
          
          <h2 className="text-2xl font-bold mb-3">You're All Set!</h2>
          <p className="text-gray-600 mb-8">Your new US mobile number will be activated shortly.</p>
          <p className="text-sm text-blue-600 mb-6">Network: {carrier?.name.split(' ')[0]}</p>
          
          <div className="bg-blue-50 border-2 border-blue-600 rounded-xl p-5 text-left">
            <h3 className="font-semibold mb-3">eSIM Activation</h3>
            <p className="text-gray-600 text-sm">Scan this QR code with your phone to activate your eSIM:</p>
            <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto my-5 flex items-center justify-center text-gray-600 text-sm">
              [QR Code]
            </div>
            <p className="text-gray-600 text-sm">Or check your email for the activation link.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[390px] mx-auto bg-white min-h-screen relative shadow-2xl">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-white/10 rotate-45 transform"></div>
        </div>
        <div className="relative z-10">
          <button
            onClick={handleBack}
            className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm mb-4 hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </button>
          <h1 className="text-3xl font-bold mb-2">Stay Connected from Day One</h1>
          <p className="text-base opacity-90">Get a US mobile number without SSN or credit check. Special plans for F-1, H-1B, and Green Card holders.</p>
        </div>
        <div className="absolute right-5 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl">
          📱
        </div>
      </div>

      {/* Content */}
      <div className="p-5 pb-28">
        {/* Carrier Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Choose Your Network</h2>
          <p className="text-gray-600 text-sm mb-5">Select the carrier that works best in your area</p>
          
          <div className="space-y-4">
            {carriers.map((carrier) => (
              <div
                key={carrier.id}
                onClick={() => handleCarrierSelect(carrier.id)}
                className={`bg-white border-2 rounded-2xl p-5 cursor-pointer transition-all duration-300 flex items-center gap-4 relative ${
                  selectedCarrier === carrier.id 
                    ? 'border-blue-600 bg-blue-50 scale-[1.02] shadow-lg' 
                    : 'border-gray-200 hover:border-blue-600 hover:shadow-md'
                }`}
              >
                {carrier.badge && (
                  <span className="absolute top-3 right-3 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                    {carrier.badge}
                  </span>
                )}
                
                <div className={`w-16 h-16 ${carrier.color} text-white rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                  {carrier.logo}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{carrier.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{carrier.description}</p>
                  
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-1">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        carrier.id === 'att' ? 'bg-blue-600' : 
                        carrier.id === 'tmobile' ? 'bg-pink-600' : 
                        'bg-red-600'
                      }`}
                      style={{ 
                        width: selectedCarrier === carrier.id ? `${carrier.coverage}%` : '0%' 
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{carrier.coverage}% Coverage</span>
                </div>
                
                <div className="flex flex-col gap-2 items-end">
                  {carrier.features.map((feature: string, index: number) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plan Selection */}
        {selectedCarrier && (
          <div className="mb-8 animate-fade-in">
            <div className="h-0.5 bg-gray-200 my-8" />
            <h2 className="text-xl font-semibold mb-5">Choose Your Plan</h2>
            
            <div className="space-y-4">
              {plans[selectedCarrier as keyof typeof plans].map((plan: any) => (
                <div
                  key={plan.id}
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`bg-white border-2 rounded-2xl p-5 cursor-pointer transition-all duration-300 relative ${
                    selectedPlan === plan.id 
                      ? 'border-blue-600 bg-blue-50 scale-[1.02] shadow-lg' 
                      : 'border-gray-200 hover:border-blue-600 hover:shadow-md'
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {plan.badge}
                    </span>
                  )}
                  
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <div className="text-2xl font-bold text-blue-600">
                      {plan.price}<span className="text-sm font-normal text-gray-600">/month</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-3">
                    {plan.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2 mt-3">
                    <div className={`px-3 py-1 text-xs font-semibold text-white rounded ${
                      getCarrierDetails(selectedCarrier as string)?.color
                    }`}>
                      {getCarrierDetails(selectedCarrier as string)?.logo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Delivery Method */}
        {selectedPlan && (
          <div className="mb-8 p-6 bg-gray-50 rounded-2xl animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Choose Delivery Method</h2>
            
            <div className="flex gap-3">
              <div
                onClick={() => handleDeliverySelect('esim')}
                className={`flex-1 p-4 bg-white border-2 rounded-xl text-center cursor-pointer transition-all ${
                  selectedDelivery === 'esim' 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-600'
                }`}
              >
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold text-base">eSIM</div>
                <div className="text-xs text-gray-600">Instant activation</div>
              </div>
              
              <div
                onClick={() => handleDeliverySelect('physical')}
                className={`flex-1 p-4 bg-white border-2 rounded-xl text-center cursor-pointer transition-all ${
                  selectedDelivery === 'physical' 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-600'
                }`}
              >
                <div className="text-3xl mb-2">📬</div>
                <div className="font-semibold text-base">Physical SIM</div>
                <div className="text-xs text-gray-600">2-3 day delivery</div>
              </div>
            </div>

            {/* Address Form for Physical SIM */}
            {selectedDelivery === 'physical' && (
              <div className="mt-5 p-5 bg-white rounded-xl border border-gray-200 animate-fade-in">
                <h3 className="text-lg font-semibold mb-4">Delivery Address</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                      placeholder="John Doe"
                      defaultValue="Rahul Sharma"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                      placeholder="123 Main St"
                    />
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Apt/Suite</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="Apt 4B"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="New York"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors bg-white cursor-pointer">
                        <option>Select State</option>
                        <option>California</option>
                        <option>Texas</option>
                        <option>New York</option>
                        <option>Florida</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* KYC Details */}
        {selectedDelivery && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-5">Verify Your Identity</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Visa Type</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors bg-white cursor-pointer">
                  <option>Select your visa type</option>
                  <option>F-1 (Student)</option>
                  <option>H-1B (Work)</option>
                  <option>L-1 (Intracompany Transfer)</option>
                  <option>Green Card Holder</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Passport/ID</label>
                <input 
                  type="file" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  accept="image/*,.pdf"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-5 shadow-2xl max-w-[390px] mx-auto">
        <button
          onClick={handleContinue}
          disabled={!selectedCarrier}
          className={`w-full py-4 px-6 rounded text-lg font-semibold transition-all duration-300 ${
            selectedCarrier
              ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {getButtonText()}
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ImmiHubSIMService;