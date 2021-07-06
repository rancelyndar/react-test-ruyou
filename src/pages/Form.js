import React, {useState} from 'react'
import imageImport from '../img/image.png'
import axios from 'axios'

const Form = () => {
    const [file,setFile] = useState()
    const [image,setImage] = useState(imageImport)
    const [response,setResponse] = useState('')
    const [contact,setContact] = useState({name:'',surname:'',patronymic:''})

    const handleImageChange = (e) => {
        e.preventDefault()
        if(e.target.files[0] != null) {
            const allowedExtensions = ['png','jpg','jpeg']
            const extension = e.target.files[0].name.split('.').pop().toLowerCase()
            if (allowedExtensions.includes(extension)) {
                setImage(URL.createObjectURL(e.target.files[0]))
                setFile(e.target.files[0])
            }
            else {
                alert(`Неправильное расширение файла, допустимые расширения: ${allowedExtensions.join(', ')}`)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData()
        formData.append('action', 'send_data')
        formData.append('id', 1)
        formData.append('image', file)
        formData.append('contact', contact)
        axios.post('https://test-job.pixli.app/send.php', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        }
    ).then(res => setResponse(res.data.status))}

    const handleContactChange = (e) => {
        setContact({...contact, [e.target.name] : e.target.value})
    }

    return (
        <main className="main">
            <div className="wrapper">
                <form className="form">
                    <label className="form__label" htmlFor="name">
                        Имя
                    </label>
                    <input className="form__input" id="name" name="name" type="text" placeholder="Лев" onChange={handleContactChange} />
                    <label className="form__label" htmlFor="surname">
                        Фамилия
                    </label>
                    <input className="form__input" id="surname" name="surname" type="text" placeholder="Лещенко" onChange={handleContactChange} />
                    <label className="form__label" htmlFor="patronymic">
                        Отчество
                    </label>
                    <input className="form__input" id="patronymic" name="patronymic" type="text" placeholder="Валерьянович" onChange={handleContactChange} />
                    <label className="form__label" htmlFor="photo">
                        Фото
                    </label>
                    <label htmlFor="photo">
                        <img className="form__photo-label" src={image} alt="Загрузка изображения" />
                    </label>
                    <input id="photo" type="file" hidden onChange={handleImageChange} accept="image/jpeg,image/png,image/jpg" />
                    <button className="form__button" type="submit" onClick={handleSubmit}>Сохранить</button>
                    <label className="form__label">Response</label>
                    <textarea className="form__response" readOnly value={response} />
                </form>
            </div>
        </main>
    )
}

export default Form