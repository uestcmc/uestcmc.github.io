import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '交流平台',
    icon: require('@site/static/img/cooperate.png').default,
    description: (
      <>
        这里也是 Minecraft 交流平台<br/>
        无论是游戏感悟还是开发心得<br/>
        还有成电的日常，都可以畅所欲言
      </>
    ),
    link: '/docs/intro',
  },
  {
    title: '玩家社区',
    icon: require('@site/static/img/usb.png').default,
    description: (
      <>
        在这里你可以分享你自己的服务器<br/>
        或是加入本社区的公益服务器<br/>
        生存、创造、小游戏，应有尽有
      </>
    ),
    link: '/docs/server',
  },
  {
    title: '高校联合',
    icon: require('@site/static/img/mua.png').default,
    description: (
      <>
        通过 Minecraft 高校联盟 (MUA)<br/>
        你将有机会接触到来自全国各地的高校玩家<br/>
        偶尔还会有联合活动，独乐乐不如众乐乐
      </>
    ),
    link: 'https://www.mualliance.cn/'
  },
];

function Feature({icon, title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <img src={icon} height="200" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
        <Link
          className="button button--primary button--lg"
          to={link}>
          了解更多
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
