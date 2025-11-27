import React from 'react';

export default function Input({ label, error, className = '', ...props }) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-2.5 
          bg-gray-50 border border-gray-200 
          rounded-xl 
          text-gray-900 placeholder-gray-400
          transition-all duration-200
          focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none
          disabled:opacity-50 disabled:bg-gray-100
          ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10' : ''}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-red-500 ml-1">{error}</p>
      )}
    </div>
  );
}
