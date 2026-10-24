import style from './Profile.module.css';
import avatar from './../../assets/Profile/user_picture.jpg';
import type { Lang } from '../../App';

interface ProfileProps {
  lang: Lang;
}

function Profile({lang}: ProfileProps) {
  const t = {
    followers: lang === 'ru' ? 'Подписчиков' : 'Followers',
    views: lang === 'ru' ? 'Просмотров' : 'Views',
    publications: lang === 'ru' ? 'Публикаций' : 'Publications',
    name: lang === 'ru' ? 'Инга' : 'Inga',
    bio: lang === 'ru' ? 'реально инга' : 'really inga',
    city: lang === 'ru' ? 'Город: Хабаровск' : 'City: Khabarovsk',
    date: lang === 'ru' ? 'Дата: 12.08.2007' : 'Date: 12.08.2007',
    time: lang === 'ru' ? '5 часов назад' : '5 hours ago',
    postText: lang === 'ru' ? 'ЧТООО' : 'WHAAAT',
  }

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
          <div><h2>318</h2><p>{t.followers}</p></div>
          <div><h2>22,871</h2><p>{t.views}</p></div>
          <div><h2>83</h2><p>{t.publications}</p></div>
        </div>
      </div>

      <div className={style.addUser}>
        <div className={style.userName}>
          <h2>{t.name}</h2>
          <p>@this_is_inga</p>
        </div>
        <div className={style.description}>
          <p>{t.bio}</p>
        </div>
        <div className={style.addInfo}>
          <p>{t.city}</p>
          {/* <p>Сайт: <a href="https://www.youtube.com/watch?v=jDqDVRh0hbI">https://www.youtube.com/watch?v=jDqDVRh0hbI</a></p> */}
          <p>{t.date}</p>
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
                <span>{t.name}</span>
              </div>
              <div className={style.userTime}>
                <p>{t.time}</p>
              </div>
            </div>

            <div className={style.messageInfoText}>
              <p>{t.postText}</p>
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