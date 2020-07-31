import React from 'react';

// import { Container } from './styles';

function FormField({value, onChange, type, name, label, tag}) {

  return (
    <div>
        <label>
            {label}:
            {
                tag === 'textarea' &&
                <textarea
                type={type}
                value={value}
                name={name}
                onChange={onChange}
            />
            }

            {
                tag === 'input' &&
                <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
            />
            }

        </label>
    </div>

  );
}

export default FormField;