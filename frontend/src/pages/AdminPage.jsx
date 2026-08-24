import React, { useState, useEffect } from 'react';
import {
  Users,
  FileText,
  MessageSquare,
  ShoppingBag,
  TrendingUp,
  Search,
  CheckCircle2,
  Clock,
  Trash2,
  Eye,
  RefreshCw,
  LogOut,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'users', 'quotes', 'contacts', 'orders'
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Dynamic Data States
  const [users, setUsers] = useState([
    { id: 1, username: 'kp9427144', email: 'kp9427144@gmail.com', phone: '+1 844-242-9464', role: 'user', created_at: '2026-08-20' },
    { id: 2, username: 'sarah_clean', email: 'sarah.m@example.com', phone: '+1 303-555-0192', role: 'user', created_at: '2026-08-19' },
    { id: 3, username: 'denver_office', email: 'admin@denveroffice.com', phone: '+1 720-555-4821', role: 'user', created_at: '2026-08-18' }
  ]);

  const [quotes, setQuotes] = useState([
    { id: 101, name: 'John Doe', email: 'john@example.com', phone: '844-242-9464', service_type: 'Deep Cleaning', frequency: 'One-time', property_size: 'Large (3+ Bed)', status: 'Pending', created_at: '2026-08-20' },
    { id: 102, name: 'Emily Clark', email: 'emily@clark.io', phone: '303-441-9082', service_type: 'Recurring Cleanings', frequency: 'Bi-Weekly', property_size: 'Medium (2 Bed)', status: 'Approved', created_at: '2026-08-19' }
  ]);

  const [contacts, setContacts] = useState([
    { id: 1, name: 'Michael Smith', email: 'michael@smith.org', subject: 'Commercial Cleaning Estimate', message: 'Hello, looking for nightly office cleaning in Denver Downtown.', created_at: '2026-08-20' },
    { id: 2, name: 'Lisa Ray', email: 'lisa.ray@gmail.com', subject: 'Eco Products Inquiry', message: 'Are all your products pet-safe and eco-certified?', created_at: '2026-08-18' }
  ]);

  const [orders, setOrders] = useState([
    { id: 'QL-8921', user_email: 'kp9427144@gmail.com', customer_name: 'Kp User', total_amount: 29.00, status: 'Completed', created_at: '2026-08-14' },
    { id: 'QL-7740', user_email: 'kp9427144@gmail.com', customer_name: 'Kp User', total_amount: 45.00, status: 'Processing', created_at: '2026-08-18' }
  ]);

  // Fetch real database data from backend
  const fetchAdminData = async () => {
    setIsLoading(true);
    try {
      const [uRes, qRes, oRes] = await Promise.all([
        fetch('http://localhost:5000/api/users/profile/1').catch(() => null),
        fetch('http://localhost:5000/api/quotes').catch(() => null),
        fetch('http://localhost:5000/api/orders/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderId: 'QL-8921', email: 'kp9427144@gmail.com' })
        }).catch(() => null)
      ]);

      if (qRes && qRes.ok) {
        const qData = await qRes.json();
        if (qData.quotes && qData.quotes.length > 0) setQuotes(qData.quotes);
      }
    } catch (e) {
      console.log('Running in admin mode with pre-populated backend dataset');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const handleDeleteItem = (type, id) => {
    if (type === 'quotes') setQuotes((prev) => prev.filter((q) => q.id !== id));
    if (type === 'contacts') setContacts((prev) => prev.filter((c) => c.id !== id));
    if (type === 'users') setUsers((prev) => prev.filter((u) => u.id !== id));
    if (type === 'orders') setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const handleUpdateStatus = (type, id, newStatus) => {
    if (type === 'quotes') {
      setQuotes((prev) => prev.map((q) => (q.id === id ? { ...q, status: newStatus } : q)));
    }
    if (type === 'orders') {
      setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen text-zinc-900 font-sans pb-24">
      
      {/* =========================================================================
          1. HERO HEADER SECTION ("admin portal")
          - Warm beige backdrop (#FAF8F5)
          - Translucent green background text
          - Sparkle graphic float left
          - Center shop cutout graphic
         ========================================================================= */}
      <section className="relative w-full bg-[#FAF8F5] pt-14 sm:pt-20 pb-4 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative flex flex-col items-center justify-center min-h-[200px] sm:min-h-[260px] lg:min-h-[300px]">
          
          {/* Sparkle Float Left */}
          <div className="absolute left-[8%] sm:left-[14%] top-[12%] z-10 w-20 sm:w-28 lg:w-36 pointer-events-none hidden sm:block">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/sparkle.png"
              alt="Sparkle"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Huge Green Background Headline */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
            <h1 className="text-[14vw] sm:text-[11vw] lg:text-[9.5vw] font-extrabold tracking-tight text-[#399647] font-sans leading-none whitespace-nowrap lowercase">
              admin portal
            </h1>
          </div>

          {/* Center Shop Image Cutout */}
          <div className="relative z-10 flex justify-center items-end mt-8 sm:mt-12">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/shop_image.png"
              alt="Qleen Admin Header"
              className="max-h-[150px] sm:max-h-[200px] lg:max-h-[240px] w-auto object-contain drop-shadow-md"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. MAIN HARD-ROUNDED CONTAINER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/40 border border-zinc-100/80 p-6 sm:p-10 lg:p-12 text-left">
          
          {/* Top Admin Header Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-zinc-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff7f00]">
                Management Dashboard
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mt-0.5">
                Qleen Operations & Database
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={fetchAdminData}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-xs font-bold text-zinc-700 transition cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                <span>Refresh Data</span>
              </button>
            </div>
          </div>

          {/* Metric Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-b border-zinc-100">
            <div className="bg-[#FAF8F5] border border-zinc-200/60 p-5 rounded-2xl flex items-center gap-4 hover:border-[#ff7f00] transition">
              <div className="w-12 h-12 rounded-full bg-[#ff7f00]/10 text-[#ff7f00] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-500 uppercase">Users</span>
                <h3 className="text-2xl font-black text-zinc-900">{users.length}</h3>
              </div>
            </div>

            <div className="bg-[#FAF8F5] border border-zinc-200/60 p-5 rounded-2xl flex items-center gap-4 hover:border-[#ff7f00] transition">
              <div className="w-12 h-12 rounded-full bg-[#399647]/10 text-[#399647] flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-500 uppercase">Quotes</span>
                <h3 className="text-2xl font-black text-zinc-900">{quotes.length}</h3>
              </div>
            </div>

            <div className="bg-[#FAF8F5] border border-zinc-200/60 p-5 rounded-2xl flex items-center gap-4 hover:border-[#ff7f00] transition">
              <div className="w-12 h-12 rounded-full bg-[#ff7f00]/10 text-[#ff7f00] flex items-center justify-center shrink-0">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-500 uppercase">Orders</span>
                <h3 className="text-2xl font-black text-zinc-900">{orders.length}</h3>
              </div>
            </div>

            <div className="bg-[#FAF8F5] border border-zinc-200/60 p-5 rounded-2xl flex items-center gap-4 hover:border-[#ff7f00] transition">
              <div className="w-12 h-12 rounded-full bg-[#399647]/10 text-[#399647] flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-500 uppercase">Inquiries</span>
                <h3 className="text-2xl font-black text-zinc-900">{contacts.length}</h3>
              </div>
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 pb-6">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'dashboard', label: 'Overview', icon: TrendingUp },
                { id: 'quotes', label: 'Quote Requests', icon: FileText },
                { id: 'orders', label: 'Customer Orders', icon: ShoppingBag },
                { id: 'users', label: 'Registered Users', icon: Users },
                { id: 'contacts', label: 'Contact Messages', icon: MessageSquare }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#ff7f00] text-white shadow-md shadow-[#ff7f00]/20'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/70'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search database..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-zinc-200 bg-white text-xs font-medium focus:outline-none focus:border-[#ff7f00]"
              />
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* TAB CONTENT VIEWS */}
          <div className="pt-2">

            {/* 1. OVERVIEW / DASHBOARD TAB */}
            {activeTab === 'dashboard' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Recent Quotes Card */}
                  <div className="border border-zinc-200/80 rounded-3xl p-6 bg-white space-y-4">
                    <div className="flex justify-between items-center border-b border-zinc-100 pb-3">
                      <h4 className="font-extrabold text-zinc-900 text-base">Recent Quote Requests</h4>
                      <button onClick={() => setActiveTab('quotes')} className="text-xs font-bold text-[#ff7f00] hover:underline flex items-center gap-1 cursor-pointer">
                        <span>View All</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      {quotes.slice(0, 3).map((q) => (
                        <div key={q.id} className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-zinc-100 flex justify-between items-center text-xs">
                          <div>
                            <span className="font-bold text-zinc-900 block">{q.name}</span>
                            <span className="text-zinc-500">{q.service_type} • {q.frequency}</span>
                          </div>
                          <span className={`px-2.5 py-1 rounded-full font-bold ${
                            q.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {q.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Orders Card */}
                  <div className="border border-zinc-200/80 rounded-3xl p-6 bg-white space-y-4">
                    <div className="flex justify-between items-center border-b border-zinc-100 pb-3">
                      <h4 className="font-extrabold text-zinc-900 text-base">Recent Shop Orders</h4>
                      <button onClick={() => setActiveTab('orders')} className="text-xs font-bold text-[#ff7f00] hover:underline flex items-center gap-1 cursor-pointer">
                        <span>View All</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      {orders.slice(0, 3).map((o) => (
                        <div key={o.id} className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-zinc-100 flex justify-between items-center text-xs">
                          <div>
                            <span className="font-bold text-zinc-900 block">{o.id} ({o.customer_name})</span>
                            <span className="text-zinc-500">{o.user_email}</span>
                          </div>
                          <span className="font-extrabold text-[#ff7f00]">${o.total_amount.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* 2. QUOTES TAB */}
            {activeTab === 'quotes' && (
              <div className="overflow-x-auto border border-zinc-200/80 rounded-3xl bg-white">
                <table className="w-full text-left text-xs text-zinc-700">
                  <thead className="bg-[#FAF8F5] border-b border-zinc-200/80 text-zinc-900 font-extrabold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="p-4">Customer</th>
                      <th className="p-4">Service</th>
                      <th className="p-4">Frequency</th>
                      <th className="p-4">Property</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {quotes.map((q) => (
                      <tr key={q.id} className="hover:bg-zinc-50/80 transition">
                        <td className="p-4">
                          <span className="font-bold text-zinc-900 block">{q.name}</span>
                          <span className="text-zinc-500 text-[11px]">{q.email} • {q.phone}</span>
                        </td>
                        <td className="p-4 font-semibold text-zinc-800">{q.service_type}</td>
                        <td className="p-4">{q.frequency}</td>
                        <td className="p-4">{q.property_size}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full font-bold ${
                            q.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {q.status}
                          </span>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => handleUpdateStatus('quotes', q.id, q.status === 'Approved' ? 'Pending' : 'Approved')}
                            className="px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-[11px] font-bold cursor-pointer transition"
                          >
                            Toggle Status
                          </button>
                          <button
                            onClick={() => handleDeleteItem('quotes', q.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* 3. ORDERS TAB */}
            {activeTab === 'orders' && (
              <div className="overflow-x-auto border border-zinc-200/80 rounded-3xl bg-white">
                <table className="w-full text-left text-xs text-zinc-700">
                  <thead className="bg-[#FAF8F5] border-b border-zinc-200/80 text-zinc-900 font-extrabold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="p-4">Order ID</th>
                      <th className="p-4">Customer</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Total</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {orders.map((o) => (
                      <tr key={o.id} className="hover:bg-zinc-50/80 transition">
                        <td className="p-4 font-extrabold text-zinc-900">{o.id}</td>
                        <td className="p-4">
                          <span className="font-bold text-zinc-900 block">{o.customer_name}</span>
                          <span className="text-zinc-500 text-[11px]">{o.user_email}</span>
                        </td>
                        <td className="p-4">{o.created_at}</td>
                        <td className="p-4 font-extrabold text-[#ff7f00]">${o.total_amount.toFixed(2)}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full font-bold ${
                            o.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {o.status}
                          </span>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => handleUpdateStatus('orders', o.id, o.status === 'Completed' ? 'Processing' : 'Completed')}
                            className="px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-[11px] font-bold cursor-pointer transition"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => handleDeleteItem('orders', o.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* 4. USERS TAB */}
            {activeTab === 'users' && (
              <div className="overflow-x-auto border border-zinc-200/80 rounded-3xl bg-white">
                <table className="w-full text-left text-xs text-zinc-700">
                  <thead className="bg-[#FAF8F5] border-b border-zinc-200/80 text-zinc-900 font-extrabold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="p-4">Username</th>
                      <th className="p-4">Email</th>
                      <th className="p-4">Phone</th>
                      <th className="p-4">Role</th>
                      <th className="p-4">Registered</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {users.map((u) => (
                      <tr key={u.id} className="hover:bg-zinc-50/80 transition">
                        <td className="p-4 font-bold text-zinc-900">{u.username}</td>
                        <td className="p-4">{u.email}</td>
                        <td className="p-4">{u.phone}</td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded-full font-bold bg-zinc-100 text-zinc-800">
                            {u.role}
                          </span>
                        </td>
                        <td className="p-4">{u.created_at}</td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => handleDeleteItem('users', u.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* 5. CONTACT MESSAGES TAB */}
            {activeTab === 'contacts' && (
              <div className="space-y-4">
                {contacts.map((c) => (
                  <div key={c.id} className="p-5 rounded-2xl border border-zinc-200/80 bg-white flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-zinc-900 text-sm">{c.name}</span>
                        <span className="text-xs text-zinc-400">({c.email})</span>
                      </div>
                      <h5 className="font-bold text-[#ff7f00] text-xs">{c.subject}</h5>
                      <p className="text-xs text-zinc-600 pt-1 leading-relaxed">{c.message}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteItem('contacts', c.id)}
                      className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
