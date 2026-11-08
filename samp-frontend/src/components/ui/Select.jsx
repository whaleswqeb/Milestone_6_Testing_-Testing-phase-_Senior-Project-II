import { forwardRef } from 'react'
import { ChevronDown, AlertCircle, Loader2 } from 'lucide-react'

const Select = forwardRef(({
  label,
  error,
  hint,
  options = [],
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  loading = false,
  className = '',
  ...props
}, ref) => {
  const isDisabled = disabled || loading

  return (
    <div className={`w-full ${className}`}>

      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          ref={ref}
          disabled={isDisabled}
          className={`
            input-field appearance-none pr-10 cursor-pointer
            ${error
              ? 'border-red-300 focus:border-red-400 focus:ring-red-400/20'
              : ''}
            ${isDisabled ? 'bg-slate-50 text-slate-400 cursor-not-allowed' : ''}
          `}
          {...props}
        >
          {loading ? (
            <option value="">Loading…</option>
          ) : (
            <>
              <option value="">{placeholder}</option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </>
          )}
        </select>

        {/* Right-side icon: spinner while loading, chevron otherwise */}
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
          {loading
            ? <Loader2 className="w-4 h-4 animate-spin text-primary-500" />
            : <ChevronDown className="w-4 h-4" />}
        </div>
      </div>

      {error && (
        <p className="form-error flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}

      {hint && !error && (
        <p className="form-hint">{hint}</p>
      )}

    </div>
  )
})

Select.displayName = 'Select'

export default Select