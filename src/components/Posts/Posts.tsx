import style from './Posts.module.css';
import avatar from './../../assets/Profile/user_picture.jpg';
import type { Lang } from '../../App';

type LocalizedString = { ru: string; en: string };

export interface PostData {
  id: number;
  name: LocalizedString;
  handle: string;
  time: LocalizedString;
  text: LocalizedString;
  image?: string;
  gif?: string;
  likes: number;
  replies: number;
  reposts: number;
}

interface PostProps {
  post: PostData;
  lang: Lang;
}

const posts: PostData[] = [
  {
    id: 1,
    name: { ru: 'Инга', en: 'Inga' },
    handle: '@this_is_inga',
    time: { ru: '5 часов назад', en: '5 haour ago'},
    text: { ru: 'ЧТООО', en: 'WHAAAT' },
    image: 'https://vet-centre.by/wp-content/uploads/folde16/11/kot-eti-udivitelnye-kotiki.jpg',
    likes: 11112,
    replies: 132,
    reposts: 120,
  },
  {
    id: 2,
    name: { ru: 'Инга', en: 'Inga' },
    handle: '@this_is_inga',
    time: { ru: '5 часов назад', en: '5 haour ago'},
    text: { ru: 'смотрите какая гифка', en: 'look at this gif' },
    gif: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
    likes: 340,
    replies: 12,
    reposts: 5,
  },
  {
    id: 3,
    name: { ru: 'Инга', en: 'Inga' },
    handle: '@this_is_inga',
    time: { ru: '5 часов назад', en: '5 haour ago'},
    text: { ru: 'просто текст без картинки', en: 'just text, no image' },
    likes: 7,
    replies: 0,
    reposts: 0,
  },
];

function Post({ post, lang }: PostProps) {
  const media = post.gif ?? post.image;

  return (
    <div className={style.message}>
      <div className={style.messageAvatar}>
        <img src={avatar} alt="Avatar" />
      </div>

      <div className={style.messageInfo}>
        <div className={style.messageInfoUser}>
          <div className={style.messageUserName}>
            <span>{post.name[lang]}</span>
            <span className={style.handle}>{post.handle}</span>
          </div>
          <div className={style.userTime}>
            <p>{post.time[lang]}</p>
          </div>
        </div>

        <div className={style.messageInfoText}>
          <p>{post.text[lang]}</p>
        </div>

        {media && (
          <div className={style.messageInfoImg}>
            <img src={media} alt="Изображение" />
          </div>
        )}

        <div className={style.messageInfoFeedback}>
          <p className={style.feedbackLike}>{post.likes}</p>
          <p className={style.feedbackReply}>{post.replies}</p>
          <p className={style.feedbackExport}>{post.reposts}</p>
        </div>
      </div>
    </div>
  );
}

function Posts({ lang }: PostsProps) {
  return (
    <div className={style.postsUser}>
      {posts.map((post) => (
        <Post key={post.id} post={post} lang={lang} />
      ))}
    </div>
  );
}

export default Posts;