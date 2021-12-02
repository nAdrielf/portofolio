import './index.css';
import React from "react";
export default class Biografi extends React.Component{
    render(){
        return(
            <>
                <h1>Biografi</h1>
                <div className="containerbio">
                    <div className="bio">
                        
                        <p>
                        Lahir di Pemalang, 22 tahun.<br /> 
                        Seorang Fresh Grad dari Politeknik Negeri Bandung, dengan prodi D4 Teknik Telekomunikasi.<br />
                        Tanggal lahir : 15 Desember 1998<br />
                        Hobi : Olahraga, makan, tidur.<br />
                        Cita-cita : Menjadi orang sukses.<br />
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
