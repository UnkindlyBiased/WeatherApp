type PropsType = {
    children: React.ReactNode
}

function Wrapper({children}: PropsType) {
    return (
        <>
            <div className="flex justify-center items-center w-screen h-[92vh]">
                {children}
            </div>
        </>
    )
}

export default Wrapper