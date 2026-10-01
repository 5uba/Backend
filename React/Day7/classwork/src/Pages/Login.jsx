function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <input type="email" placeholder="Enter Email" className="w-full border p-3 rounded-lg mb-4"/>
        <input type="password" placeholder="Enter Password" className="w-full border p-3 rounded-lg mb-4"/>
        <button className="w-full bg-gray-600 text-white p-3 rounded-lg">Login</button>
      </div>
    </div>
  );
}

export default Login;