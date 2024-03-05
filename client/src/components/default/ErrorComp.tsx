import Wrapper from "../ui/Wrapper"

function ErrorComp() {
    return (
        <Wrapper>
            <div className="flex flex-col space-y-2 items-center">
                <span className="text-5xl font-bold italic">Error</span>
                <span className="text-xl">Do it properly</span>
            </div>
        </Wrapper>
    )
}

export default ErrorComp