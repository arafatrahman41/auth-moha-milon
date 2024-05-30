import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email, password);

        // create user in firebase
        createUser(email, password)
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        })
    }
    return (
        <div className="flex justify-center">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 bg-base-200">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block dark:text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="Email" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="Email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border"
          />
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 btn btn-success">
          Register
        </button>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Already have an account?
        <Link to="/login"
          rel="noopener noreferrer"
          href="#"
          className="underline dark:text-gray-800"
        >
          Login
        </Link>
      </p>
    </div>
    </div>
    );
};

export default Register;