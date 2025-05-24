import React, { useState } from 'react';
import { ShoppingCart, MapPin, TrendingUp, User, Search, Gift, Star, Navigation, DollarSign, Check, Settings, LogOut, ChevronRight, Home, Package, Heart, Bell, ChefHat, Clock, Flame, Calendar } from 'lucide-react';

const DashboardCard = () => {
  const [activeTab, setActiveTab] = useState('loyalty');
  const [searchProduct, setSearchProduct] = useState('');
  const [selectedInvestment, setSelectedInvestment] = useState<number | null>(null);
  const [showRoute, setShowRoute] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  // Sample data
  const loyaltyPoints = 2847;
  const userLevel = 'Gold';
  const rewards = [
    { id: 1, name: '10% Off Next Purchase', points: 500, category: 'Discount' },
    { id: 2, name: 'Free Organic Fruit Basket', points: 1000, category: 'Product' },
    { id: 3, name: 'VIP Shopping Hour Access', points: 1500, category: 'Experience' },
    { id: 4, name: '$25 Store Credit', points: 2000, category: 'Credit' }
  ];

  const products = [
    { id: 1, name: 'Basmati Rice', section: 'Rice & Grains', aisle: 'A1', x: 15, y: 25 },
    { id: 2, name: 'Atta (Wheat Flour)', section: 'Rice & Grains', aisle: 'A2', x: 15, y: 35 },
    { id: 3, name: 'Toor Dal', section: 'Lentils', aisle: 'B1', x: 30, y: 25 },
    { id: 4, name: 'Garam Masala', section: 'Spices', aisle: 'C1', x: 45, y: 25 },
    { id: 5, name: 'Paneer', section: 'Dairy', aisle: 'D1', x: 60, y: 25 },
    { id: 6, name: 'Curry Leaves', section: 'Fresh Herbs', aisle: 'E1', x: 75, y: 25 },
    { id: 7, name: 'Samosas', section: 'Frozen', aisle: 'F1', x: 85, y: 35 },
    { id: 8, name: 'Jaggery', section: 'Sweets', aisle: 'G1', x: 85, y: 55 },
    { id: 9, name: 'Incense Sticks', section: 'Puja Items', aisle: 'H1', x: 15, y: 65 },
    { id: 10, name: 'Coconut Oil', section: 'Oils', aisle: 'B2', x: 30, y: 45 }
  ];

  const storeSections = [
    { name: 'Rice & Grains', aisles: ['A1', 'A2'], color: '#fef3c7' },
    { name: 'Lentils & Pulses', aisles: ['B1', 'B2'], color: '#fce7f3' },
    { name: 'Spices & Masalas', aisles: ['C1', 'C2'], color: '#e0e7ff' },
    { name: 'Dairy & Frozen', aisles: ['D1', 'F1'], color: '#ccfbf1' },
    { name: 'Fresh Produce', aisles: ['E1', 'E2'], color: '#d1fae5' },
    { name: 'Sweets & Snacks', aisles: ['G1', 'G2'], color: '#fed7aa' },
    { name: 'Puja & Festival', aisles: ['H1'], color: '#fae8ff' }
  ];

  const recipes = [
    {
      id: 1,
      name: 'Paneer Butter Masala',
      time: '30 min',
      difficulty: 'Easy',
      category: 'Main Course',
      ingredients: ['Paneer', 'Tomatoes', 'Cream', 'Garam Masala', 'Kasuri Methi'],
      inStock: true,
      festival: null
    },
    {
      id: 2,
      name: 'Masala Dosa',
      time: '45 min',
      difficulty: 'Medium',
      category: 'Breakfast',
      ingredients: ['Dosa Batter', 'Potatoes', 'Onions', 'Curry Leaves', 'Mustard Seeds'],
      inStock: true,
      festival: null
    },
    {
      id: 3,
      name: 'Modak',
      time: '60 min',
      difficulty: 'Medium',
      category: 'Dessert',
      ingredients: ['Rice Flour', 'Jaggery', 'Coconut', 'Cardamom', 'Ghee'],
      inStock: true,
      festival: 'Ganesh Chaturthi Special'
    },
    {
      id: 4,
      name: 'Dal Makhani',
      time: '90 min',
      difficulty: 'Hard',
      category: 'Main Course',
      ingredients: ['Black Lentils', 'Red Kidney Beans', 'Butter', 'Cream', 'Tomatoes'],
      inStock: false,
      festival: null
    }
  ];

  const investmentTiers = [
    {
      id: 1,
      amount: 1000,
      equity: '0.01%',
      perks: ['Lifetime 5% discount', 'Monthly investor reports', 'Name on founder wall'],
      roi: '8-12% annually'
    },
    {
      id: 2,
      amount: 5000,
      equity: '0.06%',
      perks: ['Lifetime 10% discount', 'Quarterly board meetings', 'VIP shopping events', 'Priority customer service'],
      roi: '10-15% annually'
    },
    {
      id: 3,
      amount: 10000,
      equity: '0.15%',
      perks: ['Lifetime 15% discount', 'Board advisory role', 'Store naming rights', 'Profit sharing bonus'],
      roi: '12-18% annually'
    },
    {
      id: 4,
      amount: 25000,
      equity: '0.4%',
      perks: ['Lifetime 20% discount', 'Executive board seat', 'Strategic decision input', 'Premium profit sharing'],
      roi: '15-22% annually'
    }
  ];

  const handleProductSearch = () => {
    const product = products.find(p => p.name.toLowerCase().includes(searchProduct.toLowerCase()));
    if (product) {
      setShowRoute(true);
    }
  };

  const searchedProduct = products.find(p => p.name.toLowerCase().includes(searchProduct.toLowerCase()));

  const LoyaltyPage = () => (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 mb-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-green-100 text-sm">Your Loyalty Status</p>
            <h2 className="text-3xl font-bold flex items-center gap-2">
              {loyaltyPoints} <span className="text-lg">points</span>
            </h2>
          </div>
          <div className="bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            {userLevel} Member
          </div>
        </div>
        <div className="bg-white/20 rounded-lg p-3">
          <p className="text-sm">Next level: Platinum at 5,000 points</p>
          <div className="w-full bg-white/30 rounded-full h-2 mt-2">
            <div className="bg-white rounded-full h-2" style={{ width: '57%' }}></div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-lg p-3 text-center">
          <p className="text-gray-500 text-xs">This Month</p>
          <p className="text-xl font-bold text-green-600">+347</p>
        </div>
        <div className="bg-white rounded-lg p-3 text-center">
          <p className="text-gray-500 text-xs">Lifetime Savings</p>
          <p className="text-xl font-bold text-green-600">$284</p>
        </div>
        <div className="bg-white rounded-lg p-3 text-center">
          <p className="text-gray-500 text-xs">Rank</p>
          <p className="text-xl font-bold text-green-600">#127</p>
        </div>
      </div>

      {/* Available Rewards */}
      <h3 className="text-lg font-semibold mb-3">Available Rewards</h3>
      <div className="space-y-3">
        {rewards.map(reward => (
          <div key={reward.id} className="bg-white rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Gift className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium">{reward.name}</p>
                <p className="text-sm text-gray-500">{reward.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-600">{reward.points} pts</p>
              {loyaltyPoints >= reward.points && (
                <button className="text-xs bg-green-600 text-white px-3 py-1 rounded-full mt-1">
                  Redeem
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const StoreMapPage = () => (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Store Map - Indian Grocery</h2>
      
      {/* Search Bar */}
      <div className="bg-white rounded-lg p-3 mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search products (try 'paneer' or 'dal')..."
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          className="flex-1 outline-none"
        />
        <button
          onClick={handleProductSearch}
          className="bg-green-600 text-white p-2 rounded-lg"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Store Map */}
      <div className="bg-white rounded-lg p-4 relative overflow-x-auto" style={{ minHeight: '500px' }}>
        <svg viewBox="0 0 120 100" className="w-full" style={{ minWidth: '400px', height: '450px' }}>
          {/* Store Background */}
          <rect x="0" y="0" width="120" height="100" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
          
          {/* Entry/Exit */}
          <rect x="50" y="95" width="20" height="5" fill="#10b981" />
          <text x="60" y="93" textAnchor="middle" style={{ fontSize: '8px' }} className="fill-gray-600">Entry/Exit</text>
          
          {/* Checkout Counters */}
          <rect x="10" y="5" width="100" height="8" fill="#fbbf24" />
          <text x="60" y="10.5" textAnchor="middle" style={{ fontSize: '9px' }} className="fill-gray-700">Checkout</text>
          
          {/* Section A - Rice & Grains */}
          <rect x="10" y="20" width="15" height="30" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
          <text x="17.5" y="17" textAnchor="middle" style={{ fontSize: '10px' }} className="fill-gray-700 font-bold">A</text>
          
          {/* Section B - Lentils & Pulses */}
          <rect x="27" y="20" width="15" height="30" fill="#fce7f3" stroke="#ec4899" strokeWidth="1" />
          <text x="34.5" y="17" textAnchor="middle" style={{ fontSize: '10px' }} className="fill-gray-700 font-bold">B</text>
          
          {/* Section C - Spices & Masalas */}
          <rect x="44" y="20" width="15" height="30" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1" />
          <text x="51.5" y="17" textAnchor="middle" style={{ fontSize: '10px' }} className="fill-gray-700 font-bold">C</text>
          
          {/* Section D - Dairy */}
          <rect x="61" y="20" width="15" height="15" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="1" />
          <text x="68.5" y="17" textAnchor="middle" style={{ fontSize: '10px' }} className="fill-gray-700 font-bold">D</text>
          
          {/* Section E - Fresh Produce */}
          <rect x="78" y="20" width="15" height="30" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
          <text x="85.5" y="17" textAnchor="middle" style={{ fontSize: '10px' }} className="fill-gray-700 font-bold">E</text>
          
          {/* Section F - Frozen */}
          <rect x="95" y="20" width="15" height="20" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="1" />
          <text x="102.5" y="17" textAnchor="middle" style={{ fontSize: '10px' }} className="fill-gray-700 font-bold">F</text>
          
          {/* Section G - Sweets & Snacks */}
          <rect x="78" y="52" width="32" height="15" fill="#fed7aa" stroke="#f97316" strokeWidth="1" />
          <text x="94" y="49" textAnchor="middle" style={{ fontSize: '10px' }} className="fill-gray-700 font-bold">G</text>
          
          {/* Section H - Puja Items */}
          <rect x="10" y="60" width="25" height="20" fill="#fae8ff" stroke="#a855f7" strokeWidth="1" />
          <text x="22.5" y="57" textAnchor="middle" style={{ fontSize: '10px' }} className="fill-gray-700 font-bold">H</text>
          
          {/* Bakery Section */}
          <rect x="40" y="60" width="35" height="20" fill="#fff7ed" stroke="#ea580c" strokeWidth="1" />
          <text x="57.5" y="70" textAnchor="middle" style={{ fontSize: '8px' }} className="fill-gray-600">Bakery</text>
          
          {/* Route */}
          {showRoute && searchedProduct && (
            <>
              <line x1="60" y1="95" x2="60" y2="85" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
              <line x1="60" y1="85" x2={searchedProduct.x} y2="85" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
              <line x1={searchedProduct.x} y1="85" x2={searchedProduct.x} y2={searchedProduct.y} stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
              <circle cx={searchedProduct.x} cy={searchedProduct.y} r="4" fill="#ef4444" />
              <text x={searchedProduct.x} y={searchedProduct.y - 7} textAnchor="middle" style={{ fontSize: '9px' }} className="fill-red-600 font-bold">
                {searchedProduct.aisle}
              </text>
            </>
          )}
        </svg>

        {/* Legend with Section Names */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-100 border border-yellow-500 rounded"></div>
            <span><strong>A:</strong> Rice & Grains</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-pink-100 border border-pink-500 rounded"></div>
            <span><strong>B:</strong> Lentils & Pulses</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-indigo-100 border border-indigo-500 rounded"></div>
            <span><strong>C:</strong> Spices & Masalas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-teal-100 border border-teal-500 rounded"></div>
            <span><strong>D:</strong> Dairy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-100 border border-green-500 rounded"></div>
            <span><strong>E:</strong> Fresh Produce</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-teal-100 border border-teal-500 rounded"></div>
            <span><strong>F:</strong> Frozen Foods</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-100 border border-orange-500 rounded"></div>
            <span><strong>G:</strong> Sweets & Snacks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-100 border border-purple-500 rounded"></div>
            <span><strong>H:</strong> Puja Items</span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      {showRoute && searchedProduct && (
        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-green-800">{searchedProduct.name}</p>
              <p className="text-sm text-green-600">Located in {searchedProduct.section} - Aisle {searchedProduct.aisle}</p>
            </div>
            <Navigation className="w-6 h-6 text-green-600" />
          </div>
        </div>
      )}

      {/* Quick Find Categories */}
      <div className="mt-6">
        <h3 className="font-semibold mb-3">Quick Find - Popular Items</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white rounded-lg p-3 text-left border-l-4 border-yellow-400">
            <p className="font-medium">Rice & Atta</p>
            <p className="text-sm text-gray-500">Basmati, Sona Masoori</p>
          </button>
          <button className="bg-white rounded-lg p-3 text-left border-l-4 border-pink-400">
            <p className="font-medium">Dal & Pulses</p>
            <p className="text-sm text-gray-500">Toor, Moong, Masoor</p>
          </button>
          <button className="bg-white rounded-lg p-3 text-left border-l-4 border-indigo-400">
            <p className="font-medium">Spices</p>
            <p className="text-sm text-gray-500">Whole & Ground</p>
          </button>
          <button className="bg-white rounded-lg p-3 text-left border-l-4 border-purple-400">
            <p className="font-medium">Festival Items</p>
            <p className="text-sm text-gray-500">Puja Essentials</p>
          </button>
        </div>
      </div>
    </div>
  );

  const InvestmentPage = () => (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-2">Invest in Our Growth</h2>
      <p className="text-gray-600 mb-6">Become a part-owner and share in our success</p>

      {/* Current Opportunity */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 mb-6 text-white">
        <h3 className="text-xl font-bold mb-2">Downtown Location Opening Soon!</h3>
        <p className="text-green-100 mb-4">Join 142 community investors in bringing fresh, local groceries to downtown</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-3xl font-bold">$284K</p>
            <p className="text-sm text-green-100">Raised so far</p>
          </div>
          <div>
            <p className="text-3xl font-bold">72%</p>
            <p className="text-sm text-green-100">Of $400K goal</p>
          </div>
        </div>
        <div className="w-full bg-white/30 rounded-full h-3 mt-4">
          <div className="bg-white rounded-full h-3" style={{ width: '72%' }}></div>
        </div>
      </div>

      {/* Investment Tiers */}
      <h3 className="text-lg font-semibold mb-3">Investment Options</h3>
      <div className="space-y-4">
        {investmentTiers.map(tier => (
          <div
            key={tier.id}
            className={`bg-white rounded-lg p-4 border-2 transition-all cursor-pointer ${
              selectedInvestment === tier.id ? 'border-green-600' : 'border-transparent'
            }`}
            onClick={() => setSelectedInvestment(tier.id)}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-2xl font-bold">${tier.amount.toLocaleString()}</p>
                <p className="text-green-600 font-medium">{tier.equity} equity stake</p>
              </div>
              {selectedInvestment === tier.id && (
                <div className="bg-green-600 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            
            <div className="mb-3">
              <p className="text-sm text-gray-500 mb-1">Expected Returns</p>
              <p className="font-medium text-green-600">{tier.roi}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Investor Perks</p>
              <ul className="space-y-1">
                {tier.perks.map((perk, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {selectedInvestment && (
        <button className="w-full bg-green-600 text-white font-semibold py-4 rounded-lg mt-6 flex items-center justify-center gap-2">
          <DollarSign className="w-5 h-5" />
          Invest ${investmentTiers.find(t => t.id === selectedInvestment)?.amount.toLocaleString()}
        </button>
      )}

      {/* Additional Info */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>SEC Regulation:</strong> This investment opportunity is available to accredited investors. 
          Minimum holding period is 12 months. Past performance does not guarantee future results.
        </p>
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl p-6 mb-6 text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-xl font-bold">Sarah Johnson</h3>
        <p className="text-gray-500">Member since 2022</p>
        <div className="flex justify-center gap-4 mt-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">247</p>
            <p className="text-sm text-gray-500">Orders</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">$8,432</p>
            <p className="text-sm text-gray-500">Total Spent</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Home className="w-5 h-5 text-gray-600" />
            <span>Delivery Addresses</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Package className="w-5 h-5 text-gray-600" />
            <span>Order History</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-gray-600" />
            <span>Favorite Products</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-gray-600" />
            <span>Notifications</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-gray-600" />
            <span>App Settings</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5 text-gray-600" />
            <span>Shopping Preferences</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full bg-red-50 rounded-lg p-4 flex items-center justify-between text-red-600">
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </div>
        </button>
      </div>
    </div>
  );

  const RecipePage = () => (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-2">Recipe & Meal Planning</h2>
      <p className="text-gray-600 mb-6">Traditional recipes with ingredients available in-store</p>

      {/* Festival Alert */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 mb-6 text-white">
        <div className="flex items-center gap-3">
          <Calendar className="w-6 h-6" />
          <div>
            <p className="font-semibold">Ganesh Chaturthi Coming Up!</p>
            <p className="text-sm text-purple-100">Special recipes and ingredients available</p>
          </div>
        </div>
      </div>

      {/* Today's Recommendations */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <ChefHat className="w-5 h-5 text-green-600" />
          Today's Recipe Suggestions
        </h3>
        
        <div className="space-y-3">
          {recipes.map(recipe => (
            <div
              key={recipe.id}
              className={`bg-white rounded-lg p-4 ${selectedRecipe === recipe.id ? 'ring-2 ring-green-600' : ''}`}
              onClick={() => setSelectedRecipe(selectedRecipe === recipe.id ? null : recipe.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-lg">{recipe.name}</h4>
                  {recipe.festival && (
                    <p className="text-sm text-purple-600 font-medium">{recipe.festival}</p>
                  )}
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {recipe.time}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Flame className="w-3 h-3" /> {recipe.difficulty}
                    </span>
                  </div>
                </div>
                {recipe.inStock ? (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    All items in stock
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                    Some items missing
                  </span>
                )}
              </div>

              {selectedRecipe === recipe.id && (
                <div className="mt-4 pt-4 border-t">
                  <p className="font-medium mb-2">Ingredients needed:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {recipe.ingredients.map((ing, idx) => (
                      <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {ing}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium">
                    Add All Ingredients to Cart
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Meal Planning */}
      <div className="bg-white rounded-lg p-4 mb-6">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-green-600" />
          Weekly Meal Planner
        </h3>
        <p className="text-sm text-gray-600 mb-3">Plan your week with traditional Indian meals</p>
        <div className="grid grid-cols-7 gap-1 text-xs">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-center">
              <p className="font-medium text-gray-600 mb-1">{day}</p>
              <div className="bg-gray-100 rounded p-2 h-16 flex items-center justify-center">
                <span className="text-gray-400">+</span>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 bg-green-100 text-green-700 py-2 rounded-lg font-medium">
          Generate Smart Meal Plan
        </button>
      </div>

      {/* Cooking Tips */}
      <div className="bg-yellow-50 rounded-lg p-4">
        <h3 className="font-semibold mb-2 text-yellow-800">Today's Cooking Tip</h3>
        <p className="text-sm text-yellow-700">
          For perfect fluffy rice, use a 1:2 ratio of rice to water and add a teaspoon of ghee while cooking. 
          Let it rest for 5 minutes after cooking before serving.
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative">
      {/* Status Bar */}
      <div className="bg-green-600 text-white px-4 py-2 flex justify-between items-center text-sm">
        <span>9:41 AM</span>
        <div className="flex items-center gap-2">
          <span>100%</span>
        </div>
      </div>

      {/* App Header */}
      <div className="bg-green-600 text-white px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Hareli Fresh</h1>
        <div className="flex items-center gap-3">
          <Bell className="w-6 h-6" />
          <ShoppingCart className="w-6 h-6" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {activeTab === 'loyalty' && <LoyaltyPage />}
        {activeTab === 'store-map' && <StoreMapPage />}
        {activeTab === 'investment' && <InvestmentPage />}
        {activeTab === 'profile' && <ProfilePage />}
        {activeTab === 'recipes' && <RecipePage />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto">
          <div className="flex justify-around py-2">
            <button
              onClick={() => setActiveTab('loyalty')}
              className={`flex flex-col items-center p-2 ${
                activeTab === 'loyalty' ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <Gift className="w-6 h-6" />
              <span className="text-xs mt-1">Loyalty</span>
            </button>
            
            <button
              onClick={() => setActiveTab('store-map')}
              className={`flex flex-col items-center p-2 ${
                activeTab === 'store-map' ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <MapPin className="w-6 h-6" />
              <span className="text-xs mt-1">Store Map</span>
            </button>

            <button
              onClick={() => setActiveTab('recipes')}
              className={`flex flex-col items-center p-2 ${
                activeTab === 'recipes' ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <ChefHat className="w-6 h-6" />
              <span className="text-xs mt-1">Recipes</span>
            </button>
            
            <button
              onClick={() => setActiveTab('investment')}
              className={`flex flex-col items-center p-2 ${
                activeTab === 'investment' ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs mt-1">Invest</span>
            </button>
            
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center p-2 ${
                activeTab === 'profile' ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;