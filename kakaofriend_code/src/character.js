$(function(){
	$(".nav-wrap > ul > li > a").eq(1).css("border-bottom","5px solid #3c8213");
    $lang = {};

    $lang.ko = {
        "title-text": "저마다의 개성과 인간적인 매력을 지닌 여덟 친구들",
        "title": "카카오프렌즈",
        "ryan-name": "RYAN",
        "ryan-text1": "갈기가 없는 것이 콤플렉스인 수사자",
        "ryan-text2": "큰 덩치와 무뚝뚝한 표정으로 오해를 많이 사지만, 사실 누구보다도 여리고 섬세한 소녀감성을 지닌 반전매력의 소유자! 원래 아프리카 둥둥섬 왕위 계승자였으나, 자유로운 삶을 동경해 탈출! 카카오프렌즈의 든든한 조언자 역할을 맡고 있습니다. 꼬리가 길면 잡히기 때문에, 꼬리가 짧습니다.",
        "apeach-name": "APEACH",
        "apeach-text1": "복숭아 나무에서 탈출한 악동 복숭아",
        "apeach-text2": "유전자 변이로 자웅동주가 된 것을 알고 복숭아 나무에서 탈출한 악동 복숭아 어피치! 섹시한 뒷태로 사람들을 매혹시키며 성격이 매우 급하고 과격합니다.",
        "muzincon-name": "MUZI & CON",
        "muzincon-text1": "토끼 옷을 입은 단무지인 무지와 정체불명 콘" ,
        "muzincon-text2": "호기심많은 장난구러기 무지의 정체는 사실 토끼 옷을 입은 단무지! 토끼 옷을 벗으면 부끄러움을 많이 탑니다. 단무지를 키워 무지를 만든 정체불명의 악어 콘! 이제는 복숭아를 키우고 싶어 어피치를 찾아 다닙니다.",
        "frodonneo-name": "FRODO & NEO",
        "frodonneo-text1": "부잣집 도시개 프로도와 패셔니스타 네오",
        "frodonneo-text2": "프로도와 네오는 카카오프렌즈 공식 커플로 알콩달콩 깨볶는 중! 부잣집 도시개 프로도는 사실 잡종. 태생에 대한 콤플렉스가 많습니다. 자기 자신을 가장 사랑하는 새침한 고양이 네오. 쇼핑을 좋아하는 이 구역의 대표 패셔니스타 입니다. 하지만 도도한 자신감의 근원이 단발머리 '가발'에서 나온다는건 비밀!",
        "tube-name": "TUBE",
        "tube-text1": "겁 많고 마음약한 오리 튜브",
        "tube-text2": "겁 많고 마음 약한 오리 튜브는 극도의 공포를 느끼면 미친 오리로 변신합니다. 작은 발이 콤플렉스이기 때문에 큰 오리발을 착용합니다. 미운 오리 새끼가 먼 친척입니다.",
        "jayg-name": "JAY-G",
        "jayg-text1": "힙합을 사랑하는 자유로운 영혼",
        "jayg-text2": "땅속 나라 고향에 대한 향수병이 있는 비밀요원 제이지! 사명의식이 투철하여 냉철해보이고 싶으나, 실은 어리버리합니다. 겉모습과 달리 알고보면 외로움을 많이 타는 여린 감수성의 소유자. 힙합 가수 Jay-Z의 열혈팬입니다.",
        "product": "&#62; 제품보기"
    };

    $lang.en = {
        "title-text": "have their own distinct character and charm",
        "title": "KAKAO FRIEND",
        "ryan-name": "RYAN",
        "ryan-text1": "A male lion whose complex is his absence of a mane.",
        "ryan-text2": "He is often misunderstood because of his large build and impassive expression, but in fact, he has an unexpected charm with the sensitivity of a young girl! Ryan was originally the successor to the throne on Dung Dung Island in Africa, but he escaped for a life of freedom! He is the reliable advisor among the Kakao Friends. His tail is short because it would be easy for him to get caught if it was long.",
        "apeach-name": "APEACH",
        "apeach-text1": "Mischievous peach that escaped from the peach tree",
        "apeach-text2": "Apeach, the mischievous peach that escaped from the peach tree after finding out its condition of monoecism caused by gene mutation! Apeach charms people with its sexy back, and is quite aggressive and hot-tempered.",
        "muzincon-name": "MUZI & CON",
        "muzincon-text1": "Muzi, who wears a rabbit costume, and the unidentifiable Con",
        "muzincon-text2": "The curious and playful Muzi is actually a pickled radish wearing a rabbit costume! Muzi gets very shy without the rabbit costume. The unidentifiable crocodile Con created Muzi by raising a pickled radish! Now, Con wants to raise a peach and hence is searching for Apeach.",
        "frodonneo-name": "FRODO & NEO",
        "frodonneo-text1": "The wealthy city dog Frodo and the coy fashion icon Neo",
        "frodonneo-text2": "Frodo and Neo are the official couple of the Kakao Friends, and are madly in love! Frodo, the city dog from a wealthy family, is actually a mixed breed. He has an inferiority complex about his descent. Neo, the coy feline that's bent on narcissism. She is the representative fashion icon of the district who loves shopping. However, the fact that her proud confidence is rooted in her bob 'wig' is a secret!",
        "tube-name": "TUBE",
        "tube-text1": "A timid and sensitive duck",
        "tube-text2": "Tube, a timid and sensitive duck. When Tube feels extreme terror, he transforms into a crazy green duck. His wears large flippers to hide his small feet. The Ugly Duckling is his distant relative.",
        "jayg-name": "JAY-G",
        "jayg-text1": "The free soul that loves hip hop",
        "jayg-text2": "Jay-G, a secret agent that is nostalgic about his underground home! He'd like to seem cool-headed with a clear sense of duty, but in reality is quite clumsy. Jay-G is in fact a lonely and sensitive being, unlike what his outer appearance suggests. He is a big fan of the hip hop artist Jay-Z.",
        "product": "&#62; See Products"
    }

    $lang.ja = {
        "title-text": "他の個性と人間的な魅力を持った8友人",
        "title": "カカオフレンズ",
        "ryan-name": "RYAN",
        "ryan-text1": "たてがみのない牡ライオン、ライアン",
        "ryan-text2": "大きな体とぶっきらぼうな表情で誤解されることも多いですが、実は誰よりも心優しく繊細で乙女のような心を持ち合わせた、意外な魅力の所有者です。 元々はアフリカのぷかぷか島の王位継承者でしたが、自由な生き方にあこがれて島を抜け出しました。カカオフレンズの頼もしいアドバイザーの役割を担っています。しっぽが長いと捕まってしまうため、しっぽが短いです。",
        "apeach-name": "APEACH",
        "apeach-text1": "桃の木を抜け出した悪ガキ桃、アピーチ",
        "apeach-text2": "遺伝子変異で雌雄同体となったことに気づいて 桃の木を抜け出した悪ガキ桃のアピーチ！ セクシーな後ろ姿で見る者を惹きつけますが、性格はとてもせっかちで過激です。",
        "muzincon-name": "MUZI & CON",
        "muzincon-text1": "ウサギの服を着ているムジと正体不明のコン、ムジ&コン",
        "muzincon-text2": "好奇心旺盛ないたずらっ子ムジの正体は、実はウサギの服を着たたくあん！ ウサギの服を脱ぐと恥ずかしがりになります。コンは、たくあんをムジに育て上げた正体不明のワニです。 最近では桃を育てたくなり、アピーチの後を追いかけ回しています。",
        "frodonneo-name": "FRODO & NEO",
        "frodonneo-text1": "リッチなお家の都会犬フロドと、気取り屋さんでファッショニスタのネオ、フロド&ネオ",
        "frodonneo-text2": "フロドとネオはカカオフレンズが誇るアツアツの公式カップルです！リッチなお家の都会犬フロドは、実は雑種。生まれに対してコンプレックスを感じています。 自分自身が一番大事な気取り屋さんの猫のネオ。ショッピングをこよなく愛する、街一番のファッショニスタです。 だけど、満ち溢れる自信の源がショートボブの「カツラ」であることは内緒！",
        "tube-name": "TUBE",
        "tube-text1": "小心者で気の弱いアヒルのチューブ、チューブ",
        "tube-text2": "小心者で気の弱いアヒルのチューブ。極度の恐怖を感じると、クレイジーアヒルに変身します。小さな足がコンプレックスなので、大きな足ヒレを履いています。みにくいあひるの子とは遠い親戚関係です。",
        "jayg-name": "JAY-G",
        "jayg-text1": "ヒップホップを愛する自由な魂、ジェイジー",
        "jayg-text2": "土の中にある故郷へのホームシックを常に感じているシークレット·エージェントのJAY-G！ プロ意識が強いため冷徹な男として振舞いたいのですが、内心ではきょどきょどしています。外見とは異なり、一皮むいてみると寂しがりやで繊細な感受性の持ち主。ヒップホップ歌手Jay-Zの熱烈なファンでもあります。",
        "product": "&#62; 商品を見る"
    }

    $lang.zh = {
        "title-text": "拥有各自个性和人性魅力的8位朋友.",
        "title": "KAKAO FRIEND",
        "ryan-name": "RYAN",
        "ryan-text1": "因为没有鬃毛而感到自卑的雄狮",
        "ryan-text2": "因为大块头和木讷的表情而经常被误会，其实却像少女一样比任何人都细腻、敏感，是个充满反差魅力的角色！ 原本是非洲东东岛的王位继承者，因为向往自由的人生而逃离岛上！目前担任 Kakao Friends 最可靠的指导者。尾巴太长容易被抓到，所以尾巴很短。",
        "apeach-name": "APEACH",
        "apeach-text1": "逃离了桃树的恶童桃子",
        "apeach-text2": "知道自己因为基因突变而雌雄同体，逃离了桃树的恶童桃子Apeach！总是用性感的背影吸引人们，但个性很急很激进。",
        "muzincon-name": "MUZI & CON",
        "muzincon-text1": "穿着兔子外衣的Muzi与真实身分不明的Con",
        "muzincon-text2": "充满好奇心的淘气宝宝Muzi的真实身分，其实是穿着兔子外衣的腌萝卜！脱下兔子外衣就会让它非常害羞。把腌萝卜养大变成Muzi的，则是真实身分成谜的鳄鱼Con！它现在想要养桃子，所以到处寻找Apeach。",
        "frodonneo-name": "FRODO & NEO",
        "frodonneo-text1": "住在城市里的富家狗Frodo与喜欢装模作样的时尚明星Neo",
        "frodonneo-text2": "Frodo 与 Neo 是 Kakao Friends 官方认证的情侣，甜甜蜜蜜放闪中！住在城市里的富家狗 Frodo 其实并不是纯种狗，对此它感到非常自卑。而爱装模作样的 Neo 则是最自恋的猫。喜欢购物的它，是最能代表这一区的时尚明星。不过让它能超有自信的短发，其实是顶“假发”的事情则是最大的秘密！",
        "tube-name": "TUBE",
        "tube-text1": "胆小玻璃心的鸭子",
        "tube-text2": "胆小玻璃心的鸭子，Tube。感受到强烈的恐惧时，就会变身成为疯狂鸭。因为脚很小而感到自卑，所以总是穿着大大的鸭脚鞋。跟丑小鸭是远亲。",
        "jayg-name": "JAY-G",
        "jayg-text1": "热爱嘻哈的自由灵魂",
        "jayg-text2": "非常思念地底故乡的秘密探员，Jay-G！希望让人感觉信念明确、冷静睿智，但其实有点傻。跟外表不同，深入了解会发现他很怕孤单、非常感性。是嘻哈歌手Jay-Z狂粉。",
        "product": "&#62; 查看商品细节"
    }

    function languageChange(current) {
        $("[data-num]").each(function(){
            var $this = $(this);
            $this.html($lang[current][$this.data("num")]);
        });
    }

    $(".lang-list > ul > li > a").on("click",function(){
        var classNextTarget = $(this).parent().nextAll().children();
        var classPrevTarget = $(this).parent().prevAll().children();

        $(this).addClass("lang-list-choice");
        if(classNextTarget.hasClass("lang-list-choice")) {
            classNextTarget.removeClass("lang-list-choice");
        } 
        if(classPrevTarget.hasClass("lang-list-choice")) {
            classPrevTarget.removeClass("lang-list-choice");
        }
        var lang = $(this).data("lang");
        languageChange(lang);
    });
});