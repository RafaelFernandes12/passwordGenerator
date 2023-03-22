interface ErrorProps{
    error:string
}

export function ErrorText({error}:ErrorProps){

    return (
        <p className="text-red-600 text-center">
            {error}
        </p>
    )
}