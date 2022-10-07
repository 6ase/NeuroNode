/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Nodes', [
      {
        name: 'Это важно!',
        content: 'Осмотритесь! Устраните угрозы вашей жизни и здоровью! Устраните угрозы жизни пострадавшего',
        project_id: 1,
        isFirst: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Первая помощь',
        content: 'Разместите пострадавшего с максимальным комфортом: - извлеките из труднодоступного места; - переместите на ровную поверхность.',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сознание',
        content: 'Пострадавший в сознании?',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дыхание',
        content: 'Восстановите дыхание пострадавшего: - одну руку положите на лоб пострадавшего, двумя пальцами другой руки возьмите его подбородок, запрокиньте голову; поднимите подбородок, выдвиньте нижнюю челюсть. При подозрении на травму шеи делайте это очень аккуратно! Придайте ему устойчивое боковое положение, чтобы не запал язык и рвотные массы или кровь не попали в дыхательные пути.',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Наружное кровотечение',
        content: 'проведите осмотр пострадавшего на наличие кровотечения',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Признаки жизни',
        content: 'Проверьте дышит ли пострадавший: наклонитесь щекой и ухом к его рту и носу и в течение 10 секунд пытайтесь услышать дыхание и увидеть движение грудной клетки; Проверьте пульс на магистральных артериях.',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Вызов скорой помощи',
        content: 'Продолжая реанимацию громко позовите на помощь. Говорите четко и информативно: «Человек не дышит. Вызывайте скорую. Сообщите мне, что вызвали». Если вызываете сами сообщите диспетчеру: место происшествия, что произошло, какая помощь оказывается. Трубку кладите последним, после ответа диспетчера. Вызов скорой медицинской помощи: 112.',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Остановка кровотечения',
        content: 'Освободите травмированный участок тела от одежды. Рваная рана? Наложите жгут или давящую повязку Нечем перевязать? Прижмите артерию пальцем Не можете найти источник? Надавите на рану или согните конечность в суставе Не удаляйте их раны инородные предметы!',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сердечно-легочная реанимация',
        content: 'Положите пострадавшего на спину, на ровную поверхность. Поместите свою руку основанием ладони на середину его грудной клетки, вторую руку на нее, выпрямите локти. Плечи расположите так, чтобы давить перпендикулярно плоскости грудины. Давите всем весом на глубину 5-6 см с частотой 100-120 раз в минуту. После 30 надавливаний сделайте искусственное дыхание «Рот-ко-рту»: запрокиньте голову пострадавшего, поднимите его подбородок, зажмите нос двумя пальцами и сделайте два вдоха искусственного дыхания.',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Травмы',
        content: 'осмотрите пострадавшего на предмет травм в следующем порядке: - голову; - шею; - грудину; - спину; - живот и таз; - конечности',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ранение грудной клетки',
        content: `При переломах ребер придайте пострадавшему полусидячее положение
        При ранениях груди плотно прикройте рану ладонью и
        наложите герметичную повязку: закройте рану воздухонепроницаемым материалом,
        придайте пострадавшему полусидячее положение с наклоном в пораженную сторону`,
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Травма конечности',
        content: `Крепко зафиксируйте поврежденную конечность в ее положении любыми подручными средствами (твердым картоном, палками, дощечками).
        Шины накладывайте с нескольких сторон, не забудьте мягкую прокладку.
        Повязка должна захватывать два сустава – выше и ниже повреждения.
        Не пытайтесь придать травмированной конечности правильное положение!
        Не вправляйте вывихи самостоятельно!
        Не вправляйте в открытую рану раздробленные кости!`,
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Травма головы и шеи',
        content: `Если есть признаки нарушения целостности черепа,
        обложите края раны бинтами и только после этого накладываете повязку.
        Если в ране есть инородный предмет, зафиксируйте его, обложив салфетками,
        бинтами или подручными мягкими материалами и наложите повязку.
        Зафиксируйте шейный отдел позвоночника вручную подручными средствами`,
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Отравление и воздействие химии',
        content: `При отравлении заставьте пострадавшего выпить воду и вызовите рвоту.
        При попадании веществ на кожу смойте проточной водой.`,
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Воздействие температур',
        content: `При ожоге охладите пораженное место
        При обморожении термоизолируйте пораженное место`,
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Контроль',
        content: 'Контролируйте наличие сознания, дыхание и кровообращение пострадавшего:',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Психологическая поддержка',
        content: `Не оставляйте пострадавшего одного!
        Поддерживайте физический контакт!
        Если пострадавший в сознании:
        Постарайтесь выразить поддержку и сочувствие, дайте высказаться
        Воздержитесь от советов, демонстрируйте доброжелательность не смотря ни на что
        Постарайтесь отвлечь пострадавшего от страдания и страха
        Не поддавайтесь эмоциональному заражению паникой!`,
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Передача медикам',
        content: `Передавая пострадавшего медикам не забудьте сообщить:
        - когда и при каких условиях вы его обнаружили;
        - его состояние на момент обнаружения;
        - какую помощь вы оказали и с каким результатом`,
        project_id: 1,
        isFirst: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Начало',
        content: `Когда в понедельник, второго апреля, я пролетал вблизи Бетельгейзе, метеорит размером не больше фасолины пробил обшивку, вывел из строя регулятор мощности и повредил рули – ракета потеряла управление.

        Надеть скафандр, осмотреть ракету -- Осмотр ракеты
        Перекусить и подумать -- Рискованный план`,
        project_id: 2,
        isFirst: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Осмотр ракеты',
        content: `Я надел скафандр, выбрался наружу и попробовал исправить повреждение, но убедился, что установить запасной руль, который я предусмотрительно захватил с собой, без посторонней помощи невозможно. 

        Устранить самостоятельно – Установка руля
        Вернуться в ракету и подумать -- Рискованный план`,
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Рискованный план',
        content: `Я наскоро перекусил и понял, что если бы мне удалось хоть немного 
        развернуть ракету к полюсу Галактики, она бы проткнула так называемый Vortex Gravitatiosus Pinckenbachii, в котором многократно наблюдалось удвоение и даже утроение настоящего.
        
        Развернуть ракету к полюсу Галактики – Разворот ракеты
        Надеть скафандр, осмотреть ракету -- Осмотр ракеты`,
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Установка руля',
        content: `Я потратил несколько часов, пытаясь удержать один ключ ногами и в то же время рукой завернуть с другой стороны гайку. В тот момент, когда мне это почти удалось, ключ вырвался у меня из-под ноги и умчался в космическое пространство. 

        Вернуться в ракету и подумать – Рискованный план
        Попытаться поймать ключ -- Ждать помощи`,
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Разворот ракеты',
        content: `Эта операция заняла у меня несколько часов. Результат превзошел все ожидания. Корабль попал в центр вихря около полуночи, вибрируя и постанывая всеми сочленениями. Я испугался, что он развалится. 

        Выйти из Vortex Gravitatiosus Pinckenbachii – Ждать помощи
        Продолжать маневр -- Надежда на успех`,
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ждать помощи',
        content: 'Я подумал, что напрасно трачу силы. Потеряв надежду на устранение дефекта, я впал в полное отчаяние. С тех пор я беспомощно дрейфую в космосе и надеюсь на лучшее.',
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Надежда на успех',
        content: `Я покинул реакторный отсек и увидел самого себя сладко спящим на кровати. Я сразу понял, что это я из предыдущих суток, то есть из ночи понедельника. Так я получил помощника и исправил рули. 
        Продолжение следует.`,
        project_id: 2,
        isFirst: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Пробуждение',
        content: 'Вы проснулись в полной темноте от звука падающих капель, что вы будете делать?',
        project_id: 3,
        isFirst: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Зажечь свет',
        content: 'Вы нащупали у себя в кармане зажигалку и судорожно ее подожгли. Осмотревшись, вы поняли что находитесь посреди пещеры. В углу вы замечаете, какой-то лежащий предмет.',
        project_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Идти на ощупь',
        content: 'Спотыкаясь, наобум вы долго бредете по пещере, пока не замечаете небольшой луч света, падающий с потолка. Присмотревшись, вы замечаете какой-то предмет.',
        project_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Осмотреть предмет',
        content: 'Заинтересовавшись предметом, вы подошли поближе. На полу лежала какого-странного вида папка...',
        project_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Поискать что-нибудь еще',
        content: 'Ваши поиски были безуспешны и вы поняли, что кроме неизвестного предмета в пещере больше ничего нет.',
        project_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Заглянуть в папку',
        content: `Заинтересовавшись содержимым папки, вы решаете ее открыть. Вашему удивлению нет предела:внутри оказалась ещё одна папка... "Папка в папке, получается"- подумали вы - "где-то я это слышал..."
        Ваше раздумье прерывал медвежий рев.`,
        project_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Бежаааать!',
        content: `Вы бросаете папку и бежите сломя голову в темноту. К сожалению вы так и не научились видеть в темноте: пронесясь 5 метров , вы улышали голос, который который сказал: "Ну что, бахнем и пойдем?", после чего вы с громким хлопком ударились о стену. 
        Очнувшись, вы обнаружили себя на стендапе Эльбруса, выдохнули и пошли дальше писать код`,
        project_id: 3,
        isFirst: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Поговорить с медведем',
        content: `Вы начинаете диалог с медведем и узнаете , что это всего лишь сон. "Бахнем и пойдем?"- спросил  медведь, и дал вам звонкую оплеуху.
        Вы резко проснулись и пошли дописывать код... Конец`,
        project_id: 3,
        isFirst: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Nodes', null, {});
  },
};
