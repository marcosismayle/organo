import './Rodape.css'

function Rodape() {
    return (
        <footer className='rodape'>
            <div className='social-media'>
                <img src="/images/fb.png" alt="Facebook logo" />
                <img src="/images/tw.png" alt="Twitter logo" />
                <img src="/images/ig.png" alt="Instagram logo" />
            </div>
            <div className='logo'>
                <img src="/images/logo.png" alt="Organo logo" />
            </div>
            <div className='texto'>
                <p>Desenvolvido por Marcos Ismayle | Alura</p>
            </div>
        </footer>
    )
}

export default Rodape