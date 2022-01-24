function HomePage() {
    return (
        <div>
            <h1>Boas vindas de volta!</h1>
            <h2>Discord - Alura Matrix</h2>
            {/* CSS in JS from Next itself */}
            <style jsx>{`
                h1 {
                    color: red;
                }
            `}</style>
        </div>
    )
}

export default HomePage