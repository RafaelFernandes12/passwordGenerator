interface RegisterFormProps{
    title: string,
    placeholderTitle: string,
    value?: string
    onChange?: any
    type: string
}




export function RegisterForm({title,placeholderTitle,value,onChange,type} : RegisterFormProps){
    return (
        <div className="flex flex-col m-2">
            <label className="font-bold">
                {title}
            </label>
            <input 
            placeholder={placeholderTitle}
            className='bg-slate-200 p-2 pr-4'
            value={value}
            onChange={onChange}
            type={type}
            />
        </div>
    )
}