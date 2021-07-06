import React, { useState } from 'react'
import './Converter.css'

export default function Converter(props) {
    const [form, setForm] = useState({ rgbValue: null, error: null });

    const getRgb = (hex) => {
        const checkValidity = (/^#[a-f\d]{6}$/i).test(hex);
        if (!checkValidity) {
            return null
        }
        hex = hex.replace('#', '');
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return `rgb(${(r)}, ${(g)}, ${(b)})`;
    }

    const onFieldChange = (e) => {
        e.preventDefault();
        if (e.target.value.length > 6) {
            const rgb = getRgb(e.target.value);
            if (rgb !== null) {
                setForm((prev) => ({ ...prev, rgbValue: rgb, error: null }));
                return;
            }
            setForm((prev) => ({ ...prev, error: true }));
        }
    }

    return (
        <div
            className='Converter'
            style={{ backgroundColor: form.error ? 'red' : form.rgbValue }}
        >
            <input
                className='Converter-Input'
                onChange={onFieldChange}
                id="hex"
                name="hex"
            />
            <div className='Converter-Output'>{form.error ? 'Ошибка!!!' : form.rgbValue}</div>
        </div>
    )
}
