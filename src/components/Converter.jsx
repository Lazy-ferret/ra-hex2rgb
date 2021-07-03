import React, { useState } from 'react'
import './Converter.css'

export default function Converter(props) {
    const [form, setForm] = useState({ name: '', rgbValue: '', isValid: '' });

    const getRgb = (hex) => {
        hex = hex.replace('#', '');
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        setForm(form => ({ ...form, rgbValue: `rgb(${(r)}, ${(g)}, ${(b)})` }))
    }

    const onFieldChange = (e) => {
        const regexp = /^#[a-f\d]{6}$/i;
        setForm(form => ({ ...form, name: e.target.value }))

        if (regexp.test(e.target.value)) {
            setForm(form => ({ ...form, isValid: true }))
        } else {
            setForm(form => ({ ...form, isValid: false }))
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!form.isValid) {
            setForm(form => ({ ...form, rgbValue: 'Ошибка!!!' }))
        } else {
            getRgb(form.name);
        }
    }

    return (
        <form
            className='Converter'
            style={{ backgroundColor: form.rgbValue === 'Ошибка!!!' ? 'red' : form.rgbValue }}
            onSubmit={onSubmit}
        >
            <input
                className='Converter-Input'
                onChange={onFieldChange}
                id="hex"
                name="hex"
            />
            <div className='Converter-Output'>{form.rgbValue}</div>
        </form>
    )
}

