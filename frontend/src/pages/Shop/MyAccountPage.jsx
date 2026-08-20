import React, { useState } from 'react';
import {
  AlertTriangle,
  Eye,
  EyeOff,
  KeyRound,
  User,
  Package,
  MapPin,
  LogOut,
  CheckCircle2
} from 'lucide-react';

export default function MyAccountPage() {
  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'orders', 'addresses', 'details'

  // Login Form State
  const [username, setUsername] = useState('kp9427144@gmail.com');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(true);

  // User Profile State (Logged In)
  const [userProfile, setUserProfile] = useState({
    firstName: 'Kp',
    lastName: 'User',
    displayName: 'Kp User',
    email: 'kp9427144@gmail.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      setShowErrorAlert(true);
    }
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setUpdateSuccess(true);
    setTimeout(() => setUpdateSuccess(false), 3000);
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen text-zinc-900 font-sans pb-24">
      
      {/* =========================================================================
          1. HERO HEADER SECTION
          - Warm beige backdrop (#FAF8F5)
          - Huge Green Text: "my account details" (#399647)
          - Sparkle graphic float left
          - Shop spray/lemons cutout image centered
         ========================================================================= */}
      <section className="relative w-full bg-[#FAF8F5] pt-14 sm:pt-20 pb-4 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative flex flex-col items-center justify-center min-h-[220px] sm:min-h-[300px] lg:min-h-[340px]">
          
          {/* Sparkle Floating Asset (Left) */}
          <div className="absolute left-[8%] sm:left-[14%] top-[12%] z-10 w-20 sm:w-28 lg:w-36 pointer-events-none hidden sm:block">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/sparkle.png"
              alt="Sparkle"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Huge Green "my account details" Background Headline */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
            <h1 className="text-[14vw] sm:text-[11vw] lg:text-[9.5vw] font-extrabold tracking-tight text-[#399647] font-sans leading-none whitespace-nowrap lowercase">
              my account details
            </h1>
          </div>

          {/* Center Shop Image Cutout */}
          <div className="relative z-10 flex justify-center items-end mt-8 sm:mt-12">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/shop_image.png"
              alt="Qleen Shop Header"
              className="max-h-[160px] sm:max-h-[220px] lg:max-h-[260px] w-auto object-contain drop-shadow-md"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. MAIN HARD-ROUNDED WHITE CONTAINER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/40 border border-zinc-100/80 p-6 sm:p-12 lg:p-16 text-left">

          {!isLoggedIn ? (
            /* ===================================================================
               LOGIN PAGE VIEW (EXACT MATCH OF SCREENSHOT)
               =================================================================== */
            <div className="w-full space-y-8">

              {/* 1. ERROR ALERT BAR */}
              {showErrorAlert && (
                <div className="w-full py-3.5 px-6 rounded-full border border-amber-500/80 bg-white text-zinc-700 text-sm font-medium flex items-center gap-3 shadow-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Unknown email address. Check again or try your username.</span>
                </div>
              )}

              {/* 2. PAGE TITLE */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Login
              </h2>

              {/* 3. LOGIN FORM BOX */}
              <div className="w-full border border-zinc-200/80 rounded-3xl p-6 sm:p-10 bg-white">
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  
                  {/* Username / Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">
                      Username or email address <span className="text-[#ff7f00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-full border border-zinc-200 bg-white text-zinc-800 text-sm font-medium focus:outline-none focus:border-[#ff7f00] focus:ring-1 focus:ring-[#ff7f00] transition"
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">
                      Password <span className="text-[#ff7f00]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-full border border-zinc-200 bg-white text-zinc-800 text-sm font-medium focus:outline-none focus:border-[#ff7f00] focus:ring-1 focus:ring-[#ff7f00] transition pr-16"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-zinc-400">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="hover:text-zinc-600 cursor-pointer"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Log In Button & Remember Me */}
                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="submit"
                      className="bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-3 px-8 rounded-full text-sm shadow-md shadow-[#ff7f00]/20 transition cursor-pointer"
                    >
                      Log In
                    </button>

                    <label className="flex items-center gap-2 text-sm text-zinc-600 font-medium cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-zinc-300 text-[#ff7f00] focus:ring-[#ff7f00] cursor-pointer"
                      />
                      <span>Remember me</span>
                    </label>
                  </div>

                  {/* Lost Password Link */}
                  <div className="pt-2">
                    <a
                      href="#lost-password"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Password reset instructions sent to your email.");
                      }}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#ff7f00] hover:underline"
                    >
                      <KeyRound className="w-4 h-4" />
                      <span>Lost your password?</span>
                    </a>
                  </div>

                </form>
              </div>

            </div>
          ) : (
            /* ===================================================================
               LOGGED IN USER DASHBOARD
               =================================================================== */
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Account Sidebar Navigation */}
              <div className="lg:col-span-1 border-r border-zinc-100 pr-0 lg:pr-6 space-y-2">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#ff7f00] text-white font-bold flex items-center justify-center text-lg">
                    {userProfile.displayName.charAt(0).toUpperCase()}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-zinc-900 text-sm truncate">{userProfile.displayName}</h4>
                    <p className="text-xs text-zinc-500 truncate">{userProfile.email}</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition cursor-pointer ${
                    activeTab === 'dashboard'
                      ? 'bg-[#ff7f00] text-white shadow-md shadow-[#ff7f00]/20'
                      : 'text-zinc-600 hover:bg-zinc-100'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Dashboard</span>
                </button>

                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition cursor-pointer ${
                    activeTab === 'orders'
                      ? 'bg-[#ff7f00] text-white shadow-md shadow-[#ff7f00]/20'
                      : 'text-zinc-600 hover:bg-zinc-100'
                  }`}
                >
                  <Package className="w-4 h-4" />
                  <span>Orders</span>
                </button>

                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition cursor-pointer ${
                    activeTab === 'addresses'
                      ? 'bg-[#ff7f00] text-white shadow-md shadow-[#ff7f00]/20'
                      : 'text-zinc-600 hover:bg-zinc-100'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Addresses</span>
                </button>

                <button
                  onClick={() => setActiveTab('details')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition cursor-pointer ${
                    activeTab === 'details'
                      ? 'bg-[#ff7f00] text-white shadow-md shadow-[#ff7f00]/20'
                      : 'text-zinc-600 hover:bg-zinc-100'
                  }`}
                >
                  <KeyRound className="w-4 h-4" />
                  <span>Account Details</span>
                </button>

                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-red-600 hover:bg-red-50 transition cursor-pointer mt-4"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </button>
              </div>

              {/* Main Tab Content */}
              <div className="lg:col-span-3">
                {activeTab === 'dashboard' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-zinc-900">
                      Hello <span className="text-[#ff7f00]">{userProfile.displayName}</span>!
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      From your account dashboard you can view your <button onClick={() => setActiveTab('orders')} className="text-[#ff7f00] font-bold hover:underline">recent orders</button>, manage your <button onClick={() => setActiveTab('addresses')} className="text-[#ff7f00] font-bold hover:underline">shipping and billing addresses</button>, and edit your <button onClick={() => setActiveTab('details')} className="text-[#ff7f00] font-bold hover:underline">password and account details</button>.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                      <div
                        onClick={() => setActiveTab('orders')}
                        className="bg-zinc-50 border border-zinc-200/80 hover:border-[#ff7f00] p-6 rounded-2xl cursor-pointer transition group"
                      >
                        <Package className="w-8 h-8 text-[#ff7f00] mb-3 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold text-zinc-900">Recent Orders</h4>
                        <p className="text-xs text-zinc-500 mt-1">Track & view history</p>
                      </div>

                      <div
                        onClick={() => setActiveTab('addresses')}
                        className="bg-zinc-50 border border-zinc-200/80 hover:border-[#ff7f00] p-6 rounded-2xl cursor-pointer transition group"
                      >
                        <MapPin className="w-8 h-8 text-[#ff7f00] mb-3 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold text-zinc-900">Addresses</h4>
                        <p className="text-xs text-zinc-500 mt-1">Billing & Shipping</p>
                      </div>

                      <div
                        onClick={() => setActiveTab('details')}
                        className="bg-zinc-50 border border-zinc-200/80 hover:border-[#ff7f00] p-6 rounded-2xl cursor-pointer transition group"
                      >
                        <KeyRound className="w-8 h-8 text-[#ff7f00] mb-3 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold text-zinc-900">Account Details</h4>
                        <p className="text-xs text-zinc-500 mt-1">Edit profile & password</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-zinc-900">Your Orders</h3>
                    <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-extrabold text-zinc-900">QL-8921</span>
                          <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-emerald-100 text-emerald-700">
                            Completed
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-1">August 14, 2026 • Cleaning Fabric Set (x2)</p>
                      </div>
                      <span className="font-extrabold text-[#ff7f00] text-lg">$29.00</span>
                    </div>
                  </div>
                )}

                {activeTab === 'addresses' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-zinc-900">Your Addresses</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6">
                        <h4 className="font-extrabold text-zinc-900 text-base mb-2">Billing Address</h4>
                        <p className="text-xs text-zinc-600">2590 Walnut St, Denver, CO 80205</p>
                      </div>
                      <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6">
                        <h4 className="font-extrabold text-zinc-900 text-base mb-2">Shipping Address</h4>
                        <p className="text-xs text-zinc-600">2590 Walnut St, Denver, CO 80205</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-zinc-900">Account Details</h3>
                    {updateSuccess && (
                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>Saved successfully!</span>
                      </div>
                    )}
                    <form onSubmit={handleProfileUpdate} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 mb-1">Display name *</label>
                        <input
                          type="text"
                          value={userProfile.displayName}
                          onChange={(e) => setUserProfile({ ...userProfile, displayName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm font-medium"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#ff7f00] text-white font-bold py-3 px-6 rounded-xl text-sm shadow-md"
                      >
                        Save Changes
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
