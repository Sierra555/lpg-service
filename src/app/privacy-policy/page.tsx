import Head from 'next/head';
import Header from '../components/header/Header';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Політика конфіденційності | GasMaster</title>
        <meta name="description" content="Дізнайтеся, як ми збираємо та обробляємо ваші дані." />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header className='text-black' isLogoV2={true} />
        <div className="container mx-auto p-4 pt-[228px]">
            <h1 className="text-4xl font-bold mb-4 text-center">Політика конфіденційності</h1>
            <br/><span>Останнє оновлення: 11 грудня 2024</span>
            <br/><span>Дата набрання чинності: 1 січня 2025</span>
            
            <p className="py-4">
                Ця Політика конфіденційності описує політики компанії ГазМастер,
                вул. Народна, 19, Львів 79015, Україна, email: gasmaster@gmail.com, телефон: +380935390303,
                щодо збору, використання та розкриття вашої інформації, яку ми збираємо
                під час використання вами нашого вебсайту ( https://gas-master.vercel.app/ ).
                (далі - «Сайт»). Використовуючи або отримуючи доступ до Сайту,
                ви даєте свою згоду на збір, використання та розкриття вашої інформації відповідно до цієї
                Політики конфіденційності. Якщо ви не погоджуєтесь з цим, будь ласка, не використовуйте Сайт.
            </p>

            <p className="py-4">
                Ми можемо змінювати цю Політику конфіденційності в будь-який час без попереднього
                повідомлення і публікувати оновлену Політику на Сайті. Оновлена Політика
                набирає чинності через 180 днів після її публікації на Сайті, і ваше
                подальше використання або доступ до Сайту після цього часу означатиме вашу згоду
                з оновленою Політикою конфіденційності. Тому ми рекомендуємо періодично
                переглядати цю сторінку.
            </p>

            <ol className="pl-10 space-y-8">
                <li>
                    <h2 className="font-bold text-3xl">
                        1. Інформація, яку ми збираємо:
                    </h2>
                    
                    <p className="py-4">
                        Ми збираємо та обробляємо наступну особисту інформацію про вас:
                    </p>
                    <ol className="list-disc pl-8">
                        <li>Ім&apos;я</li>
                        <li>Мобільний телефон</li>
                    </ol>
                </li>

                <li>
                    <h2 className="font-bold text-3xl">
                        2. Як ми використовуємо вашу інформацію:
                    </h2>
                    <p className="py-4">
                        Ми використовуватимемо інформацію, яку ми збираємо
                        про вас, з наступними цілями:
                    </p>
                    <ol className="list-disc pl-8">
                        <li>Підтримка</li>
                        <li>Управління замовленнями клієнтів</li>
                    </ol>
                    <p className="py-4">
                        Якщо ми хочемо використовувати вашу інформацію для інших цілей,
                        ми запитаємо вашу згоду та використовуватимемо вашу інформацію тільки після
                        отримання вашої згоди, і лише для тих цілей, для яких надано згоду, якщо це не суперечить закону.
                    </p>
                </li>
                
                <li>
                    <h2 className="font-bold text-3xl">
                       3. Як ми ділимося вашою інформацією:
                    </h2>

                    <p className="py-4">
                        Ми не будемо передавати вашу особисту інформацію
                        третім особам без вашої згоди, за винятком обмежених випадків, як описано
                        нижче:
                    </p>
                    <ol className="list-disc pl-8">
                        <li>Рекламні сервіси</li>
                        <li>Аналітика</li>
                    </ol>
                    
                    <p className="py-4">
                        Ми вимагаємо від третіх осіб використовувати
                        особисту інформацію, яку ми їм передаємо, лише для цілей, для яких вона була передана, і
                        не зберігати її довше, ніж це необхідно для виконання цієї мети.
                    </p>
                    <p className="py-4">
                        Ми також можемо розкрити вашу особисту інформацію
                        у таких випадках: (1) для дотримання чинного
                        законодавства, судового наказу або іншого юридичного процесу; (2) для виконання угод з вами,
                        включаючи цю Політику конфіденційності; або (3) для відповіді на претензії, що ваше використання Сайту порушує
                        права третіх осіб. Якщо Сайт або наша компанія буде об&apos;єднана чи придбана іншою
                        компанією, ваша інформація стане частиною активів, які передаються новому власнику.
                    </p>
                </li>
                    <li>
                    <h2 className="font-bold text-3xl">
                        4. Зберігання вашої інформації:
                    </h2>
                    <p className="py-4">
                        Ми будемо зберігати вашу особисту інформацію
                        протягом 1 року або стільки, скільки буде потрібно для виконання цілей, для яких
                        вона була зібрана, як зазначено в цій
                        Політиці конфіденційності. Ми можемо зберігати певну інформацію довше, якщо це необхідно для
                        ведення записів/звітності відповідно до чинного законодавства або для інших законних причин,
                        таких як забезпечення прав, запобігання шахрайству тощо. Анонімна та агрегована інформація,
                        яка не ідентифікує вас (безпосередньо чи опосередковано), може зберігатися необмежено.
                    </p>
                </li>
                
                <li>
                    <h2 className="font-bold text-3xl">
                        5. Ваші права:
                    </h2>
                    <p className="py-4">
                        В залежності від застосовного законодавства, ви можете мати
                        право на доступ до ваших особистих даних, їх виправлення або видалення,
                        отримання копії ваших особистих даних, обмеження або заперечення проти активної
                        обробки ваших даних, попросити нас передати (портувати)
                        вашу особисту інформацію іншій особі, відкликати згоду, яку ви надали нам на
                        обробку ваших даних, право подати скаргу до уповноваженого органу і інші права,
                        що можуть бути релевантними відповідно до чинного законодавства. Щоб
                        скористатися цими правами, ви можете написати нам на
                        gasmaster@gmail.com.
                        Ми відповімо на ваше
                        звернення відповідно до чинного законодавства.
                    </p>
                    <p className="py-4">
                        Зверніть увагу, що якщо ви не дозволите нам збирати
                        або обробляти необхідну особисту інформацію або відкличете згоду на її обробку для
                        необхідних цілей, ви не зможете отримати доступ
                        або використовувати послуги, для яких збиралась ваша інформація.
                    </p>
                </li>
                    <li>
                    <h2 className="font-bold text-3xl">
                        6. Cookies та інші технології відстеження:
                    </h2>
                    <p className="py-4">
                        Щоб дізнатися більше про те, як ми використовуємо ці
                        технології та ваші вибори щодо них, будь ласка, ознайомтеся з нашою
                        <a href="https://gas-master.vercel.app/cookies">Політикою cookies.</a>
                    </p>
                </li>
                
                <li>
                    <h2 className="font-bold text-3xl">
                        7. Безпека:
                    </h2>
                    <p className="py-4">
                        Безпека вашої інформації важлива для нас, і ми вживаємо розумних заходів безпеки
                        для запобігання втраті, зловживанню або несанкціонованим
                        змінам вашої інформації, що знаходиться під нашим
                        контролем. Однак, враховуючи ризики, ми
                        не можемо гарантувати абсолютну безпеку та
                        не можемо забезпечити або гарантувати
                        безпеку будь-якої інформації, яку ви передаєте нам,
                        і ви робите це на свій власний ризик.
                    </p>
                </li>

                
                <li>
                    <h2 className="font-bold text-3xl">
                        8. Захист даних:
                    </h2>
                    <p className="py-4">
                        Якщо у вас є будь-які запитання або зауваження щодо обробки вашої інформації, яка знаходиться
                        у нас, ви можете написати нашому адміністратору з питань захисту даних на адресу:
                        ГазМастер,
                        вул. Народна,19,
                        email: gasmaster@gmail.com.
                        Ми розглянемо ваші запити відповідно до чинного законодавства.
                    </p>
                </li>
            </ol>
     </div>
    </>
  );
}