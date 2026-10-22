import style from './Profile.module.css';

function Profile() {
    return(
        <>
                <div className={style.profile}>
                    <div className={style.user}>
                        <div className={style.backgroundImage}>
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHxNdzde8hDVr7qFnuFOMY76dgt4lt7GWh_Cs5eRxyg&s=10"
                            alt="Cover"
                            />
                        </div>

                        <div className={style.infoUser}>
                            <div className={style.userAvatar}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iuIMIPjUVhv5rNX02BIWrzgRdENvVr94um4NbIZTjw&s=10" alt="Avatar" />
                            </div>
                            <div className={style.statistic}>
                            <div>
                                <h2>45K</h2>
                                <p>Сообщений</p>
                            </div>
                            <div>
                                <h2>45K</h2>
                                <p>Сообщений</p>
                            </div>
                            <div>
                                <h2>45K</h2>
                                <p>Сообщений</p>
                            </div>
                            {/* Кнопка отображается только если это не собственный профиль */}
                            {/* {!isOwnProfile && (
                                <div className={style.buttonBorder}>
                                <button>Читать</button>
                                </div>
                            )} */}
                            </div>
                        </div>

                        <div className={style.addUser}>
                            <div className={style.userName}>
                            <h2>Инга</h2>
                            <p>@this_is_inga</p>
                            </div>
                            <div className={style.description}>
                            <p>реально инга</p>
                            </div>
                            <div className={style.addInfo}>
                            <p>Хабаровск</p>
                            <p>https://www.youtube.com/watch?v=jDqDVRh0hbI</p>
                            <p>12.08.2007</p>
                            </div>
                        </div>

                        {/* {message && <p className={style.error}>{message}</p>} */}

                        <div className={style.postsUser}>
                            посты
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Profile;