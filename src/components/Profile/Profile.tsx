import style from './Profile.module.css';
import avatar from './../../assets/Profile/user_picture.jpg';

function Profile() {
  return (
    <div className={style.profile}>

      <div className={style.backgroundImage}>
        <img src="..." alt="Cover" />
      </div>

      <div className={style.infoUser}>
        <div className={style.userAvatar}>
          <img src={avatar} alt="Avatar" />
        </div>
        <div className={style.statistic}>
          <div><h2>318</h2><p>Подписчиков</p></div>
          <div><h2>22,871</h2><p>Просмотров</p></div>
          <div><h2>83</h2><p>Публикаций</p></div>
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
          <p>Город: Хабаровск</p>
          {/* <p>Сайт: <a href="https://www.youtube.com/watch?v=jDqDVRh0hbI">https://www.youtube.com/watch?v=jDqDVRh0hbI</a></p> */}
          <p>Дата: 12.08.2007</p>
        </div>
      </div>

      <div className={style.postsUser}>
        <div className={style.message}>
          <div className={style.messageAvatar}>
            <img
              src={avatar}
              alt="Avatar"
            />
          </div>

          <div className={style.messageInfo}>
            <div className={style.messageInfoUser}>
              <div className={style.messageUserName}>
                <span>Инга</span>
              </div>
              <div className={style.userTime}>
                <p>5 часов назад</p>
              </div>
            </div>

            <div className={style.messageInfoText}>
              <p>ЧТООО</p>
            </div>

            <div className={style.messageInfoImg}>
              <img
                src="https://vet-centre.by/wp-content/uploads/folde16/11/kot-eti-udivitelnye-kotiki.jpg"
                alt="Изображение"
              />
            </div>

            <div className={style.messageInfoFeedback}>
              <p className={style.feedbackLike}>11112</p>
              <p className={style.feedbackReply}>132</p>
              <p className={style.feedbackExport}>120</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;