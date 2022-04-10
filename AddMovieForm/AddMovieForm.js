import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
    const {movies, setMovies} = props;
    // Membuat variable state title , date, type, dan poster
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [poster, setPoster] = useState("");
    const [type, settype] = useState("");

    // State untuk error title,date, type, dan  poster
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isPosterError, setIsPosterError] = useState(false);
    const [isTypeError, setIsTypeError] = useState(false);

    // Membuat fungsi handleTitle dan date
    function handleTitle(e) {
        // men set title dengan nilai baru(inputan)
        setTitle(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    } 

    function handlePoster(e) {
        setPoster(e.target.value);
    }

    function handleType (e) {
        settype(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        // Jika title atau date kosong, set error menjadi true dan jika tidak maka akan menambahkan data
        if (title === "") {
            setIsTitleError(true);
        }

        else if(date === "") {
            setIsDateError(true);
        }
        else if(poster === "") {
            setIsPosterError(true);
        }
        else if(type === "") {
            setIsTypeError(true);
        }

        else {
            const movie = {
                id:nanoid(),
                title: title,
                year: date,
                type: type,
                poster:poster,
            };
            setMovies([...movies, movie]);

            setIsTitleError(false);
            setIsDateError(false);
            setIsPosterError(false);
            setIsTypeError(false);
        }
    }
 
    
    
    return(
        <div className={styles.container}>
            <section className={styles.addmovieform}>
                <div className={styles.addmovieform__left}>
                    <img className={styles.addmovieform__image} src="https://picsum.photos/600/400" alt=""></img>
                </div>
                <div className={styles.addmovieform__right}>
                    <h2 className={styles.addmovieform__title}>Add Movie Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.addmovieform__group}>
                            <label   className={styles.addmovieform__label} htmlFor="title">Title</label>
                            <input   className={styles.addmovieform__input} type="text" id="title" value={title} onChange={handleTitle}/>
                            {/*
                                Menambahkan pesan eror 
                            */}
                            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.addmovieform__group}>
                            <label   className={styles.addmovieform__label} htmlFor="title">Date</label>
                            <input   className={styles.addmovieform__input} type="number" id="date" value={date} onChange={handleDate}/>
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.addmovieform_group2}>
                            <input className={styles.addmovieform_picture} type="text" value={poster} onChange={handlePoster}/>
                            {isPosterError && <Alert>Link Gambar Wajib Diisi</Alert>}
                            <select className={styles.addmovieform_select}  id="" value={type} onChange={handleType}>
                                <option value="">Pilih Kategori</option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                                <option value="Horor">Horor</option>
                                <option value="Comedy">Comedy</option>
                            </select>
                            {isTypeError && <Alert>Kategori Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.addmovieform__group}>
                            <button className={styles.addmovieform__button}>Add  Movie</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;