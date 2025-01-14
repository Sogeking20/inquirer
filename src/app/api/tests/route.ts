import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // SELECT * FROM tests WHERE email = 'emasd'
  const tests = await prisma.test.findMany();

  return NextResponse.json(tests);
}

// export async function POST(req: NextRequest) {
//   const test = await prisma.test.create({
//     data: {
//       name: "Тест на дружбу",
//       description:
//         "Хочешь узнать, насколько крепкая у тебя дружба? Пройди наш тест и получи объективную оценку ваших отношений с друзьями.",
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPbn2dGAYMCyZaK1LAPAnUPwm3Me7cQ2g4Q&s", // Добавьте URL изображения
//       questions: {
//         create: [
//           {
//             name: "Что для вас важнее всего в дружбе?",
//             answers: {
//               create: [
//                 {
//                   text: "Честность и открытость",
//                 },
//                 {
//                   text: "Совместимость и интересы",
//                 },
//                 {
//                   text: "Поддержка в трудные моменты",
//                 },
//                 {
//                   text: "Верность и лояльность",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как вы обычно реагируете, если друг не может помочь в трудной ситуации?",
//             answers: {
//               create: [
//                 {
//                   text: "Я понимаю и не держу зла",
//                 },
//                 {
//                   text: "Я расстраиваюсь, но принимаю",
//                 },
//                 {
//                   text: "Это вызывает у меня недовольство",
//                 },
//                 {
//                   text: "Я чувствую себя преданным",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как часто вы готовы помогать друзьям?",
//             answers: {
//               create: [
//                 {
//                   text: "Всегда, когда они нуждаются",
//                 },
//                 {
//                   text: "Иногда, если у меня есть время",
//                 },
//                 {
//                   text: "Только если это важно для меня",
//                 },
//                 {
//                   text: "Я не люблю вмешиваться в чужие проблемы",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как вы относитесь к честной критике от друга?",
//             answers: {
//               create: [
//                 {
//                   text: "Я ценю ее и готов улучшаться",
//                 },
//                 {
//                   text: "Я чувствую себя неловко, но принимаю",
//                 },
//                 {
//                   text: "Я стараюсь избегать таких разговоров",
//                 },
//                 {
//                   text: "Мне неприятно, и я защищаюсь",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как вы реагируете, если друг не согласен с вашим мнением?",
//             answers: {
//               create: [
//                 {
//                   text: "Я спокойно обсуждаю его точку зрения",
//                 },
//                 {
//                   text: "Я стараюсь убедить его в своей правоте",
//                 },
//                 {
//                   text: "Мне становится неприятно, и я предпочитаю молчать",
//                 },
//                 {
//                   text: "Я прекращаю разговор, если он не согласен",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Какие черты характера вашего друга для вас самые важные?",
//             answers: {
//               create: [
//                 {
//                   text: "Доброта и заботливость",
//                 },
//                 {
//                   text: "Честность и прямолинейность",
//                 },
//                 {
//                   text: "Умение поддержать в трудную минуту",
//                 },
//                 {
//                   text: "Открытость и интерес к жизни",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как вы чувствуете себя, когда ваш друг заводит новые знакомства?",
//             answers: {
//               create: [
//                 {
//                   text: "Я рад за него и поддерживаю",
//                 },
//                 {
//                   text: "Иногда завидую, но стараюсь не показывать",
//                 },
//                 {
//                   text: "Чувствую себя немного отстраненным",
//                 },
//                 {
//                   text: "Я переживаю, что меня могут забыть",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Что для вас важнее всего в общении с другом?",
//             answers: {
//               create: [
//                 {
//                   text: "Умение выслушать и понять",
//                 },
//                 {
//                   text: "Поддержка и советы",
//                 },
//                 {
//                   text: "Совместное времяпрепровождение",
//                 },
//                 {
//                   text: "Открытые и честные разговоры",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как часто вы общаетесь с друзьями?",
//             answers: {
//               create: [
//                 {
//                   text: "Каждый день",
//                 },
//                 {
//                   text: "Несколько раз в неделю",
//                 },
//                 {
//                   text: "Раз в месяц или реже",
//                 },
//                 {
//                   text: "Я предпочитаю встречаться только по большим праздникам",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как вы реагируете на ссоры с другом?",
//             answers: {
//               create: [
//                 {
//                   text: "Стараюсь быстро разрешить конфликт и поговорить",
//                 },
//                 {
//                   text: "Могу обидеться и некоторое время не общаться",
//                 },
//                 {
//                   text: "Признаю свою вину и пытаюсь исправить",
//                 },
//                 {
//                   text: "Долгое время не могу простить и держу обиду",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Если друг просит вас о помощи, но вы не можете помочь, что вы сделаете?",
//             answers: {
//               create: [
//                 {
//                   text: "Поясню причины и предложу помощь в будущем",
//                 },
//                 {
//                   text: "Попробую найти способ помочь, несмотря на свои ограничения",
//                 },
//                 {
//                   text: "Откажусь, но постараюсь помочь как-то иначе",
//                 },
//                 {
//                   text: "Не буду говорить прямо, что не могу помочь",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Какие ситуации могут вызвать у вас недовольство в дружбе?",
//             answers: {
//               create: [
//                 {
//                   text: "Когда друг не соблюдает обещания",
//                 },
//                 {
//                   text: "Когда друг игнорирует мои чувства",
//                 },
//                 {
//                   text: "Когда друг не делится своими проблемами",
//                 },
//                 {
//                   text: "Когда друг слишком часто требует внимания",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как вы относитесь к друзьям, которые часто просят у вас деньги или вещи?",
//             answers: {
//               create: [
//                 {
//                   text: "Это нормально, я готов помочь",
//                 },
//                 {
//                   text: "Я бы помог, но очень осторожно",
//                 },
//                 {
//                   text: "Я не люблю такие просьбы, но иногда соглашаюсь",
//                 },
//                 {
//                   text: "Я избегаю таких ситуаций, мне это некомфортно",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Какой тип дружбы для вас предпочтительнее?",
//             answers: {
//               create: [
//                 {
//                   text: "Близкая, доверительная дружба, основанная на эмоциях",
//                 },
//                 {
//                   text: "Дружба, основанная на общих интересах",
//                 },
//                 {
//                   text: "Легкая дружба, не требующая слишком много времени и усилий",
//                 },
//                 {
//                   text: "Дружба, в которой оба партнера поддерживают друг друга в сложных ситуациях",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как вы относитесь к тому, если друг забывает о вашем важном событии (например, день рождения)?",
//             answers: {
//               create: [
//                 {
//                   text: "Я понимаю, у каждого может быть много дел",
//                 },
//                 {
//                   text: "Мне это немного обидно, но я не показываю",
//                 },
//                 {
//                   text: "Это неприятно, и я часто переживаю по этому поводу",
//                 },
//                 {
//                   text: "Это может стать поводом для ссоры",
//                 },
//               ],
//             },
//           },

//           {
//             name: "Если у вас есть разногласия с другом, как вы их решаете?",
//             answers: {
//               create: [
//                 { text: "Мы открыто обсуждаем все недоразумения" },
//                 {
//                   text: "Я пытаюсь понять его точку зрения и соглашаюсь на компромисс",
//                 },
//                 {
//                   text: "Я предпочитаю избегать конфликта и откладываю разговор",
//                 },
//                 {
//                   text: "Я настаиваю на своем, пока не получу признания своей правоты",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как часто вы готовы жертвовать своим временем ради друга?",
//             answers: {
//               create: [
//                 { text: "Всегда, если это нужно другу" },
//                 { text: "Иногда, если у меня есть время и желание" },
//                 { text: "Я предпочитаю, чтобы это было обоюдно" },
//                 { text: "Мне важнее свои дела и планы" },
//               ],
//             },
//           },
//           {
//             name: "Какие качества вашего друга вам не нравятся, но вы готовы с ними мириться?",
//             answers: {
//               create: [
//                 { text: "Непунктуальность" },
//                 { text: "Эгоизм" },
//                 { text: "Чрезмерная застенчивость" },
//                 { text: "Склонность к драматизации ситуаций" },
//               ],
//             },
//           },
//           {
//             name: "Как вы реагируете, если ваш друг не разделяет ваши увлечения?",
//             answers: {
//               create: [
//                 { text: "Я не обижаюсь, у каждого есть свои интересы" },
//                 {
//                   text: "Мне не хватает общих интересов, но я принимаю его увлечения",
//                 },
//                 { text: "Мне важно, чтобы друг разделял мои увлечения" },
//                 { text: "Я стараюсь переделать его взгляды" },
//               ],
//             },
//           },
//           {
//             name: "Какая черта характера вашего друга вас раздражает больше всего?",
//             answers: {
//               create: [
//                 { text: "Лень" },
//                 { text: "Чрезмерная агрессивность" },
//                 { text: "Занудство" },
//                 { text: "Отсутствие терпимости" },
//               ],
//             },
//           },
//           {
//             name: "Как часто вы хотите, чтобы друг звонил или писал вам?",
//             answers: {
//               create: [
//                 { text: "Каждый день, мне важно поддерживать связь" },
//                 { text: "Несколько раз в неделю" },
//                 { text: "Иногда, когда есть что обсудить" },
//                 { text: "Мне нравится, когда я сам решаю, когда общаться" },
//               ],
//             },
//           },
//           {
//             name: "Что для вас важнее в отношениях с другом?",
//             answers: {
//               create: [
//                 { text: "Понимание и доверие" },
//                 { text: "Общие увлечения и интересы" },
//                 { text: "Готовность поддержать в трудные моменты" },
//                 { text: "Возможность быть собой без осуждения" },
//               ],
//             },
//           },
//           {
//             name: "Как вы относитесь к друзьям, которые часто жалуются на жизнь, но ничего не предпринимают, чтобы изменить ситуацию?",
//             answers: {
//               create: [
//                 { text: "Я сочувствую и стараюсь помочь" },
//                 { text: "Я понимаю, но иногда это становится утомительным" },
//                 { text: "Это вызывает у меня раздражение" },
//                 { text: "Я стараюсь избегать таких разговоров" },
//               ],
//             },
//           },
//           {
//             name: "Как бы вы поступили, если бы друг предал ваше доверие?",
//             answers: {
//               create: [
//                 { text: "Я бы постарался поговорить с ним и выяснить причины" },
//                 {
//                   text: "Я бы пытался понять его мотивы, но отношения уже не были бы такими, как раньше",
//                 },
//                 { text: "Я бы не смог простить и разорвал бы отношения" },
//                 { text: "Я бы простил, но не забывал бы о случившемся" },
//               ],
//             },
//           },
//           {
//             name: "Как вы считаете, что важнее всего для крепкой дружбы?",
//             answers: {
//               create: [
//                 { text: "Совместные воспоминания и опыт" },
//                 { text: "Открытость и честность" },
//                 { text: "Понимание и поддержка" },
//                 { text: "Общие цели и стремления" },
//               ],
//             },
//           },
//           {
//             name: "Если ваш друг переживает сложный период в жизни, что вы сделаете?",
//             answers: {
//               create: [
//                 { text: "Буду рядом, предлагая помощь и поддержку" },
//                 { text: "Дам время, но всегда буду на связи" },
//                 { text: "Попытаюсь предложить решения его проблем" },
//                 {
//                   text: "Постараюсь отвлечь его, чтобы он не зацикливался на проблемах",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как вы воспринимаете ситуацию, когда друг забыл ответить на ваше сообщение?",
//             answers: {
//               create: [
//                 { text: "Я понимаю, у каждого могут быть свои дела" },
//                 { text: "Меня это расстраивает, но я не обижаюсь" },
//                 { text: "Я чувствую себя игнорированным" },
//                 {
//                   text: "Это вызывает у меня недовольство и я могу не написать ему снова",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как бы вы отреагировали, если ваш друг рассказал всем о вашем личном секрете?",
//             answers: {
//               create: [
//                 { text: "Я бы постарался понять, почему он так поступил" },
//                 {
//                   text: "Я бы сказал ему, что это неприемлемо, но постарался бы сохранить отношения",
//                 },
//                 {
//                   text: "Это стало бы для меня причиной для прекращения общения",
//                 },
//                 { text: "Я бы простил, но больше не делился бы личным" },
//               ],
//             },
//           },
//           {
//             name: "Что для вас значит «быть хорошим другом»?",
//             answers: {
//               create: [
//                 { text: "Быть рядом в трудные моменты" },
//                 { text: "Уметь слушать и помогать советами" },
//                 {
//                   text: "Понимать, когда друг нуждается в личном пространстве",
//                 },
//                 { text: "Делить радости и переживания" },
//               ],
//             },
//           },
//           {
//             name: "Как вы предпочли бы проводить время с другом?",
//             answers: {
//               create: [
//                 { text: "Заниматься совместными увлечениями или хобби" },
//                 { text: "Спокойно общаться и проводить время в компании" },
//                 { text: "Путешествовать или посещать разные мероприятия" },
//                 {
//                   text: "Просто быть рядом, даже если не делаем ничего особенного",
//                 },
//               ],
//             },
//           },
//           {
//             name: "Как бы вы поступили, если бы друг предал ваше доверие?",
//             answers: {
//               create: [
//                 { text: "Я бы постарался поговорить с ним и выяснить причины" },
//                 {
//                   text: "Я бы пытался понять его мотивы, но отношения уже не были бы такими, как раньше",
//                 },
//                 { text: "Я бы не смог простить и разорвал бы отношения" },
//                 { text: "Я бы простил, но не забывал бы о случившемся" },
//               ],
//             },
//           },
//         ],
//       },
//       results: {
//         create: [
//           {
//             name: "«Идеалист в дружбе»",
//             description:
//               "Вы относитесь к дружбе с глубоким уважением и идеализируете ее. Для вас важны такие качества, как честность, открытость и взаимное доверие. Вы стремитесь создать отношения, в которых оба партнера могут быть собой, не опасаясь осуждения. Ваша дружба — это не просто общение, а истинное братство, основанное на поддержке, заботе и искренности. В отношениях вы всегда готовы открыто говорить о своих чувствах и проблемах, чтобы решить их вместе. Вы ожидаете от друзей того же — полной отдачи и готовности быть рядом в трудные моменты. Для вас важно, чтобы друг был не только человеком, с которым приятно проводить время, но и тем, кто всегда поддержит вас, если что-то пойдет не так. Однако ваше восприятие дружбы может ставить высокие ожидания. Иногда вы можете быть разочарованы, если друг не оправдывает ваших идеалов или не проявляет такую же степень открытости и поддержки, как вы. Важно помнить, что каждая дружба уникальна, и люди могут выражать свою привязанность по-разному. Это не всегда означает, что друг вас не ценит — возможно, ему нужно больше времени для того, чтобы научиться открываться.",
//           },
//           {
//             name: "«Прагматик»",
//             description:
//               "Вы подходите к дружбе с практичной и рациональной точки зрения. Ваша основная ценность — это гармония и баланс. Вы склонны выбирать друзей, с которыми вас объединяют общие интересы или цели. Это может быть что-то, что вы делаете вместе — будь то хобби, работа или общие жизненные цели. Для вас важно, чтобы отношения не только приносили удовольствие, но и помогали вам расти как личности, развиваться и достигать своих целей. Ваши друзья знают, что вы не станете тратить время на пустые разговоры или бессмысленные действия. Вы всегда знаете, зачем и почему что-то делаете, и хотите, чтобы ваш друг тоже следовал этим принципам. В отношениях вы цените стабильность, предсказуемость и взаимное уважение. Однако ваша прагматичность может иногда мешать вам развивать более глубокие и эмоциональные отношения. Вы можете избегать ситуаций, когда нужно открыться и поделиться личными переживаниями, потому что предпочитаете решать проблемы рационально и без лишних эмоций. Иногда вам стоит позволить себе быть более открытым и восприимчивым к эмоциям друзей, чтобы отношения стали более теплыми и многогранными.",
//           },
//           {
//             name: "«Слушатель и опора»",
//             description:
//               "Вы — истинный друг, на которого можно положиться в любой ситуации. Вы тот, кто готов выслушать, поддержать и дать мудрый совет. Ваша дружба всегда строится на глубоком взаимном уважении и понимании. Вы всегда готовы помочь другу в трудную минуту, независимо от того, что происходит в вашей жизни. Важно для вас, чтобы ваш друг чувствовал поддержку и внимание, ведь вы уверены, что именно эта поддержка делает отношения крепкими и долгосрочными. Тем не менее, иногда вы можете забывать о собственных потребностях и чувствах. Часто вы полностью поглощены заботой о других, забывая, что и вам нужны поддержка и внимание. Друзья могут не всегда осознавать, как много вы отдаете, и не всегда могут вернуть эту заботу с той же искренностью. Иногда стоит научиться просить о помощи, не боясь показать уязвимость и делиться своими переживаниями. Ведь настоящая дружба — это не только поддержка, но и возможность открыться друг другу.",
//           },
//           {
//             name: "«Свободный дух»",
//             description:
//               "Вы цените свою независимость и свободу, и это отражается в вашем подходе к дружбе. Для вас важны отношения, которые не ограничивают вас, не заставляют чувствовать себя связанным обязательствами и не подавляют. Вы не любите навязчивое общение и предпочитаете, чтобы ваши друзья уважали ваши личные границы. Вы цените свободу и не любите, когда вам навязывают свою точку зрения или требуют вашего внимания без предупреждения. Вместе с тем, ваши друзья ценят вашу независимость и ненавязчивость. Вы не заставляете их чувствовать себя обязанными, и ваши отношения скорее легкие и непринужденные. Вы умеете ценить моменты вместе, не ожидая, что общение должно быть постоянным. Однако важно помнить, что иногда, чтобы поддерживать крепкие дружеские связи, необходимо проявлять больше инициативы и вовлеченности, особенно если друг переживает трудные времена. Иногда ваша стремление к независимости может восприниматься как равнодушие. Людям нужно понимать, что их эмоции и переживания имеют значение, и важно быть рядом, когда они нуждаются в поддержке. Даже если вы предпочитаете не вмешиваться, иногда стоит сделать шаг навстречу и показать свою заинтересованность в жизни друга.",
//           },
//           {
//             name: "«Эмоциональный друг»",
//             description:
//               "Вы — человек, который вкладывает душу в каждую дружбу. Ваши отношения с друзьями строятся на эмоциональной связи и взаимопонимании. Вы не боитесь выражать свои чувства и делиться переживаниями. Важно для вас, чтобы в отношениях была искренность, и чтобы ваши эмоции не оставались скрытыми. Вы стремитесь к глубокому пониманию, чтобы не только поддерживать, но и чувствовать, что ваш друг искренне переживает за вас. Однако ваша эмоциональная открытость может порой быть не совсем удобной для других, особенно если они не готовы к таким откровениям. Вы можете ожидать, что ваш друг будет столь же открыт и восприимчив к эмоциям, как и вы. Важно помнить, что не все люди могут или хотят открываться так же глубоко, как вы, и нужно давать друзьям пространство, чтобы они могли проявлять себя в своей собственной манере. Дружба — это не только эмоции и переживания, но и умение слушать, понимать и принимать различия. Если вы научитесь принимать своих друзей такими, какие они есть, и быть гибким в проявлении своих чувств, ваши отношения станут еще крепче.",
//           },
//           {
//             name: "«Практичный друг»",
//             description:
//               "Для вас дружба — это прежде всего стабильность и надежность. Вы цените честность, предсказуемость и долговечность отношений. Вы не склонны к эмоциональным бурям и предпочитаете решать проблемы с рассудительностью и прагматизмом. В отношениях с друзьями вам важна не только эмоциональная поддержка, но и практическая помощь, возможность совместно решать вопросы и делиться опытом. Ваши друзья могут рассчитывать на вашу помощь в самых разных ситуациях, потому что вы всегда знаете, как действовать и что делать. Вы не склонны к чрезмерной эмоциональности, но при этом всегда можете поддержать друга, если это нужно. Однако вам может не хватать гибкости в отношениях — иногда стоит проявлять больше внимания к чувствам других людей и быть менее сосредоточенным на рациональной стороне вещей. Важно помнить, что дружба — это не только решение проблем, но и разделение радости, смеха и вдохновения. Если вы научитесь уделять внимание более легким и эмоциональным моментам, это принесет дополнительные позитивные эмоции в ваши отношения.",
//           },
//         ],
//       },
//     },
//   });

//   console.log(test);

//   return NextResponse.json(test);
// }
