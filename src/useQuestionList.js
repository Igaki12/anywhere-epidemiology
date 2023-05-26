import {
    useState
} from 'react'
import question05192 from './img/question/question05192.png';
import question0519 from './img/question/question0519.png';
import answer05191 from './img/answer/answer05191.png';
import answer05190 from './img/answer/answer05190.png';
import question0526 from './img/question/question0526.png';



// import A from './img/answer/.png'


export const useQuestionList = () => {
    const appName = 'anywhere-epidemiology'
    const jpName = '公衆衛生学'
    const [questionList, setQuestionList] = useState([
        // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
        {
            groupTag: '出席確認',
            groupContents: [{
                    detailInfo: '4/14',
                    questionImg: [],
                    questionSentence: 'Winslowの公衆衛生の定義で重要視された要素に当てはまらないのはどれか            ',
                    choices: [
                        '行政による生活環境整備',
                        '医療看護サービスの組織化',
                        '衛生教育の充実',
                        '組織的な感染症予防対策',
                        '国民自身の努力',
                    ],
                    answerImg: [],
                    answer: '国民自身の努力',
                    commentary: 'Winslowは組織で生活環境を守ろうと提唱した人物。',
                },
                {
                    detailInfo: '4/14',
                    questionImg: [],
                    questionSentence: '疫学を英語で記載せよ（すべて小文字で入力）     ',
                    // choices: ['憲法', '医師法', '医療法', '地域保健法', '健康増進法'],
                    answerImg: [],
                    answer: 'epidemiology',
                    commentary: 'epi + dermos + logy',
                },
                {
                    detailInfo: '4/14',
                    questionImg: [],
                    questionSentence: '疫学研究ではないのはどれか            ',
                    choices: [
                        '特定の遺伝子領域がコードするたんぱく質を同定した',
                        '過去２０年間のわが国の総死亡数の推移を分析した            ',
                        '高血圧者１０００名と正常血圧者１０００名について、その後１０年間の脳卒中発症の頻度を比較した',
                        '心筋梗塞患者５０名と非発症者１５０名に、過去の喫煙歴を聴取し、喫煙と心筋梗塞発症の関連を調査した',
                        'がん患者４００人を、Ａ薬を投与する群、Ｂ薬を投与する群に無作為に割り付け、二群の予後を比較した',
                    ],
                    answerImg: [],
                    answer: '特定の遺伝子領域がコードするたんぱく質を同定した',
                    commentary: '疫学は人の集団に関する研究である。',
                },
                {
                    detailInfo: '4/14',
                    questionImg: [],
                    questionSentence: '人口動態統計の結果についての記述で誤りはどれか            ',
                    choices: [
                        '総死亡数は増加傾向である',
                        '粗死亡率は増加傾向である',
                        '男性の粗死亡率は女性より高い',
                        '年齢調整死亡率は減少傾向である',
                        '１５－６４歳の死亡数は増加傾向である',
                    ],
                    answerImg: [],
                    answer: '１５－６４歳の死亡数は増加傾向である',
                    commentary: '人口動態統計は死亡届（医師の死亡診断書or死体検案書）をもとにした統計。単位人口当たりの死者数を示す粗死亡率でも増加傾向にある。人口構成の影響を除外した年齢調整死亡率では減少傾向にあるため、医療サービス自体に問題があるわけではない。0~15,16=64歳の年代の死亡数は減少し続けている。→死亡数が増加しているのは年齢構成の変化（高齢者の増加）のため',
                },
                {
                    detailInfo: '4/14',
                    questionImg: [],
                    questionSentence: '下記の疾患のうち、死亡率で最も高いのはどれか            ',
                    choices: ['老衰', '肺炎', '心疾患', '脳血管疾患', '自殺'],
                    answerImg: [],
                    answer: '心疾患',
                    commentary: '日本人の死因は、1.悪性新生物、2.心疾患、3.老衰、4.脳血管疾患、5.肺炎。老衰は最近急増している。',
                },
                {
                    detailInfo: '4/14',
                    questionImg: [],
                    questionSentence: 'すべての医師が公衆衛生にかかわる必要があることを定めている法律は以下のどれか            ',
                    choices: ['憲法', '医師法', '医療法', '地域保健法', '健康増進法'],
                    answerImg: [],
                    answer: '',
                    commentary: '医師法第1条に定められている。',
                },
                {
                    detailInfo: '4/14',
                    questionImg: [],
                    questionSentence: '１９７０年当時、わが国で最も死亡率が高かった死因はどれか            ',
                    choices: ['悪性新生物', '心疾患', '脳血管疾患', '結核', '老衰'],
                    answerImg: [],
                    answer: '脳血管疾患',
                    commentary: '戦後すぐは結核が1位だった→脳血管疾患が1位→現在は悪性新生物が1位。',
                },
                {
                    detailInfo: '4/14',
                    questionImg: [],
                    questionSentence: '悪性新生物の記述疫学について正しいのはどれか            ',
                    choices: [
                        '悪性新生物の年齢調整死亡率は増加傾向である',
                        '悪性新生物の死亡数は減少傾向である',
                        '男性で最も死亡率が高いのは膵臓がんである',
                        '胃がん死亡率は男女ともに減少傾向である',
                        '肝臓がんの死亡率は横ばいである',
                    ],
                    answerImg: [],
                    answer: '胃がん死亡率は男女ともに減少傾向である',
                    commentary: 'がんは年齢とともに増えてしまう病気である。男性で死亡率が最も高いのは肺がんである。胃がんも肝臓がんも感染症に起因するがんで、最近は減少傾向にある。',
                },
                {
                    detailInfo: '4/14',
                    questionImg: [],
                    questionSentence: '感染症に起因するといわれているがんをすべて選べ     ',
                    choices: ['胃がん', '肝臓がん', '肺がん', '子宮頸がん', '子宮体がん'],
                    answerImg: [],
                    answer: '胃がん、肝臓がん、子宮頸がん',
                    commentary: 'ヘリコバクターピロリ（細菌だが原虫に近い）、肝炎ウイルス、ヒューマンパピローマウイルス。子宮体がんは別。',
                },
                {
                    detailInfo: '4/14',
                    questionImg: [],
                    questionSentence: '心疾患、脳血管疾患の死亡率について正しいのはどれか            ',
                    choices: [
                        '脳内出血が脳梗塞より多い',
                        '虚血性心疾患は増加傾向である',
                        '虚血性心疾患は心不全より多い',
                        '脳血管疾患は増加傾向である',
                        '心疾患は増加傾向である',
                    ],
                    answerImg: [],
                    answer: '心疾患は増加傾向である',
                    commentary: '昔は脳出血が多かったが、現状では脳梗塞が多くなった。虚血性心疾患（心筋梗塞など）より心不全の方が多い。脳血管疾患は減少傾向にある。心疾患は増加傾向にあり、その原因は心不全（高血圧などの生活習慣が原因）で、虚血性心疾患はカテーテル治療などの普及により横ばいor減少傾向にある。脳血管疾患は全体としては減少傾向にあり、脳梗塞が1980以降最も多い。脳血管疾患は死亡率としては減少傾向にあるが、要介護に陥る危険性が高く（認知症の次）、軽視できないとされている。',
                },
                {
                    detailInfo: '4/21',
                    questionImg: [],
                    questionSentence: '有病割合（率）を表す英単語を記載せよ（全て小文字）',
                    answerImg: [],
                    answer: 'prevalence',
                    commentary: '',
                },
                {
                    detailInfo: '4/21',
                    questionImg: [],
                    questionSentence: '罹患率について誤りはどれか',
                    answerImg: [],
                    choices: [
                        '観察期間を有する研究に用いられる',
                        'リスク保有者を観察対象とする',
                        'イベント発生時で観察を終了する',
                        '脱落者の観察期間は計算から除外する',
                        'イベント発生の速度を表している',
                    ],
                    answer: '脱落者の観察期間は計算から除外する',
                    commentary: '観察人年を分母にとって、罹患した数の率を計算する→速度という表現もできる。脱落者も脱落するまでの観察期間を使うことができる点で優秀な指標。',
                },
                {
                    detailInfo: '4/21',
                    questionImg: [],
                    questionSentence: '交絡因子を表す英単語で記載せよ（全て小文字）',
                    answerImg: [],
                    answer: 'confounders',
                    commentary: '疫学を学習する上で最も重要なテーマ',
                },
                {
                    detailInfo: '4/21',
                    questionImg: [],
                    questionSentence: '交絡因子の説明として正しい説明を全て選べ',
                    answerImg: [],
                    choices: [
                        '曝露因子とアウトカムとは別の第三の因子である',
                        '曝露因子と関連する',
                        'アウトカムの危険因子である',
                        '曝露→アウトカムの中間因子である',
                        '曝露とアウトカムの関連分析において、見かけ上、交絡は関連を弱めることがある',
                        '曝露とアウトカムの関連分析において、見かけ上、交絡は関連を強めることがある',
                        '曝露とアウトカムの真の関連を立証するには、交絡の影響を調整する必要がある。',
                    ],
                    answer: '「曝露→アウトカムの中間因子である」以外全て',
                    commentary: '交絡因子は曝露→アウトカムの中間因子ではないことが定義の一つ。C型肝炎→肝臓がんに対する肝硬変など。交絡因子は関連を変化させる（強める場合もあれば、弱める場合もある）。研究では様々な方法で交絡の影響を調節し、曝露とアウトカムの因果を調べることが重要。',
                },
                {
                    detailInfo: '4/21',
                    questionImg: [],
                    questionSentence: '層化による交絡因子の調整について正しいものを全て選べ。',
                    choices: [
                        '曝露因子のレベルで層化する',
                        '交絡因子のレベルで層化する',
                        'アウトカムのレベルで層化する',
                        '交絡因子が多数存在する場合に有効である',
                        '数理モデルによる調整とくらべて、 結果の解釈で容易である',
                    ],
                    answerImg: [],
                    answer: '「交絡因子のレベルで層化する」、「数理モデルによる調整とくらべて、結果の解釈で容易である」',
                    commentary: '層化分析法。交絡因子のレベルで層別化すれば、同じ層の中での結果＝交絡因子の影響をうけない結果をわかりやすく導くことができる。この方法の弱点は交絡因子が多い場合。層が膨れ上がってしまい、統計学的な研究に耐えられない。このような場合は数理モデルで解析するしかない。',
                },
                {
                    detailInfo: '4/21',
                    questionImg: [],
                    questionSentence: '直接法による年齢調節死亡率について正しい説明を全て選べ',
                    answerImg: [],
                    choices: [
                        '分析対象集団の年齢階級別死亡数を用いる',
                        'わが国では基準集団に昭和50年モデル人口を用いることが多い',
                        '基準集団の年齢階級別死亡率が、 分析対象集団の年齢構成で発生した場合に予想される死亡数を期待死亡数として算出する',
                        'SMRを算出する',
                        'がんの死亡率を奈良県内の市町村別に比較するのに適している',
                        '分析対象集団の年齢階級別死亡率が、 基準集団の年齢構成で発生した場合に予想される死亡数を期待死亡数として算出する',
                    ],
                    answer: '「分析対象集団の年齢階級別死亡数を用いる」、「分析対象集団の年齢階級別死亡率が、 基準集団の年齢構成で発生した場合に予想される死亡数を期待死亡数として算出する」',
                    commentary: '年齢が交絡因子となるため、死亡率の比較には年齢因子について調節する必要がある。間接法では小さな対象集団トータルでの死亡数と人口分布のみ利用する。わが国では基準集団として昭和60年をモデルとして利用する事が多い。SMRは間接法の指標で、基準集団とどの程度死亡リスクが高いかを表すことができる。',
                },
                {
                    detailInfo: '4/21',
                    questionImg: [],
                    questionSentence: '心筋梗塞の既往歴のない60歳以上の男女500名を対象者として、10年間縦断研究を行った。 500名のうち2%が急性心筋梗塞で死亡したことが分かった。 本研究の結果分析で用いられた指標はどれか。',
                    answerImg: [],
                    choices: [
                        'incidence rate',
                        'prevalence',
                        'incidence proportion',
                        'mortality rate',
                        'case fatality',
                    ],
                    answer: 'incidence proportion',
                    commentary: '観察人年を記録していないので、incidence rateは利用できない。incidenceはイベントを指すので、incidence of deathとしてincidence proportionとして指標を用いる。',
                },
                {
                    detailInfo: '4/28',
                    questionImg: [],
                    questionSentence: 'A市の40歳以上住民の血圧平均値を調査する研究において、求めたい真の値と、抽出対象者の測定結果の平均値の差を、何と呼ぶか（英語で答えよ）（すべて小文字）',
                    answerImg: [],
                    answer: 'error',
                    commentary: '我々が目にするデータは標本であって、本当に知りたい母集団を扱っているデータはほとんど存在しない。',
                },
                {
                    detailInfo: '4/28',
                    questionImg: [],
                    questionSentence: '上記１の答えのうち、抽出標本数を増加させることによって減少するのは何か？（英語　すべて小文字）',
                    answerImg: [],
                    answer: 'random error',
                    commentary: '特性は対象者数を増やすと減少すること、また誤差の幅（たまたま大きめになってしまったら、低めになってしまう）が対称的分布すること。',
                },
                {
                    detailInfo: '4/28',
                    questionImg: [],
                    questionSentence: '上記１の答えのうち、抽出標本数を増加させても減少しないのは何か？（英語　すべて小文字）',
                    answerImg: [],
                    answer: 'systematic error/bias',
                    commentary: '系統誤差。一般的な言葉ではバイアス。例えば血圧の測定方法や、水銀柱の見方、血圧計の誤差など。',
                },
                {
                    detailInfo: '4/28',
                    questionImg: [],
                    questionSentence: 'A市の40歳以上住民の血圧平均値を調査する研究について、正しい説明をすべてえらべ。',
                    answerImg: [],
                    choices: [
                        '母平均の信頼区間は、標本平均±1.96×標準偏差である',
                        '標本の年齢構成を母集団にそろえるために、層化無作為抽出を行う',
                        '測定前の安静時間、体位、室温、測定機器を統一することで、系統誤差が減少する',
                        '抽出する対象者数を多くしても、母平均の信頼区間は変化しない',
                        '対象者が参加しやすいように、測定日を多く設定することで、系統誤差は減少する',
                    ],
                    answer: '2,3,5番目',
                    commentary: '標準偏差の仕様と標準誤差の使い分けが大切。サンプルの分布を調べるときは標準誤差、母平均の信頼区間は標準誤差を用いる。標本は年齢階級別にしないと協力者の年齢構成が偏る場合が多い。母集団の年齢構成にそろえるために、母集団抽出時の抽出率を変化させることも行われる（あらかじめ非協力的になりやすい若者を多めに選んでおく）。例えば体位を座って/立ち上がって血圧を測ると系統誤差が出てきてしまう。対象者数を多くするとランダムエラーが減って信頼区間は減る。参加しやすいヒトと参加しにくいヒトの間に結果の差がある場合は、協力的なヒトばかり測定しないように、できるだけ参加しやすい調査にすることも大切→サンプリングエラー。',
                },
                {
                    detailInfo: '4/28',
                    questionImg: [],
                    questionSentence: '2群の平均値の差の検定について、正しい説明をすべて選べ          ',
                    answerImg: [],
                    choices: [
                        '帰無仮説は「2群の標本平均値には差がない」である',
                        '対立仮説は、「2群の母平均には差がある」である',
                        'Ｐ値は帰無仮説が正しい条件下で、偶然、標本でみられた差　もしくはそれ以上の差がみられる確率のこと',
                        'Ｐ値は対立仮説が正しい確率である',
                        'ｐ値が5％より少ない場合に、有意な差があると判断する',
                    ],
                    answer: '2,3,5番目',
                    commentary: 'そもそも母平均に興味がある→帰無仮説は「二群の母平均には差がない」である。対立仮説が正しい確率であるかどうかを調べることを本当は行いたいが、難しいので回りくどい方法を取っている→最近はこれができるベイズ統計が流行。P値が低いと、偶然起こりにくいので、有意な差があるとの判断となる。',
                },
                {
                    detailInfo: '4/28',
                    questionImg: [],
                    questionSentence: '2群の平均値の差の検定について、誤りはどれか       ',
                    answerImg: [],
                    choices: [
                        '有意な結果は、偶然誤差では説明のつかない差があることを示唆している',
                        '有意な差は、臨床的に重要な差であることを示唆している',
                        '対象者数の大きな研究は、わずかな差でも有意な結果を導く',
                        '系統誤差のために、有意な差がみられることがある',
                        '対応のない2群の平均値の比較にはt検定を用いる',
                    ],
                    answer: '有意な差は、臨床的に重要な差であることを示唆している',
                    commentary: 'たとえ有意な差であっても、臨床的に重要かどうかはその差の大きさについても考慮した方が良い。→実際の疾患のリスクがどれくらい増えるか相談。対象者数が多いと信頼区間が狭くなるので、二群の差が有意な差になる場合が増える。信頼区間やP値などの検定では系統誤差については考慮していない。→有意な差であっても安心してはいけない。このような場合にはpared T testを用いる',
                },
                {
                    detailInfo: '4/28',
                    questionImg: [],
                    questionSentence: '集団特性を表す代表値について正しいのはどれか',
                    answerImg: [],
                    choices: [
                        '数値の分布によらず平均値を用いる',
                        '分布の確認には、棒グラフを用いる',
                        '正規分布しない標本特性を、平均値と標準偏差で表現する',
                        '平均値と中央値が乖離する集団特性を箱ひげ図で表現する',
                        '第3四分位点は、中央値のことである',
                    ],
                    answer: '平均値と中央値が乖離する集団特性を箱ひげ図で表現する',
                    commentary: '平均や標準偏差などを用いる前提条件は、分布が正規分布であること。分布をあらわす棒グラフのようなものは棒グラフではなくヒストグラムとよぶ。第三四分位数は、一番下から75%に位置する（中央値は第二四分位数）最も重要なのは分布を調べてから指標を用いる事。',
                },
                {
                    detailInfo: '4/28',
                    questionImg: [],
                    questionSentence: '曝露因子とアウトカムが連続変数であるときの説明で誤りはどれか          ',
                    answerImg: [],
                    choices: [
                        '回帰直線は最小二乗法でもとめる',
                        '回帰係数はー１から＋１の値をとる',
                        '決定係数は相関係数の2乗で求める',
                        '独立変数と従属変数を入れ替えても、相関係数は同じ値をとる',
                        '相関係数が最大の場合、独立変数の値が決まれば従属変数の値が１つ決まる',
                    ],
                    answer: '回帰係数はー１から＋１の値をとる',
                    commentary: '-1~+1の値をとるのは相関係数correlation coefficient。回帰係数：regression coefficient。回帰係数は傾きを表している。決定係数は従属変数が独立変数の何パーセントかを表す係数。相関係数は変わらないが、回帰係数はこの場合変化する。相関係数と回帰係数を区別することが大切。',
                },
                {
                    detailInfo: '4/28',
                    questionImg: [],
                    questionSentence: '1000名の若者において、禁煙教育実施の前後に、「受動喫煙の健康影響を知っていますか？」という問いに対して「はい」と回答した者の割合を比較する。どの方法がもっとも適切か？',
                    answerImg: [],
                    choices: [
                        'カイ二乗検定',
                        '対応のあるt検定',
                        'ｔ検定',
                        'マクネマー検定',
                        'フィッシャーの正確確率検定',
                    ],
                    answer: 'マクネマー検定',
                    commentary: '前後の比較だから、対応するデータで、なおかつ割合を扱っている。→マクネマー検定。対応のない検定ならｶｲ二乗検定、',
                },

                {
                    detailInfo: '5/12',
                    questionImg: [],
                    questionSentence: '個人レベルでは突合できない既存の集団レベルデータを用いて、曝露とアウトカムの関連を調査する研究デザインを英語で何というか。（すべて小文字）',
                    answerImg: [],
                    answer: 'ecological study',
                    commentary: '生態学的研究：eEcological studyは、地域相関研究とも呼ばれ、集団レベルでしかわからないような事について研究する。例えば国単位のビール消費量と直腸がんの関係など。',
                },
                {
                    detailInfo: '5/12',
                    questionImg: [],
                    questionSentence: '曝露とアウトカムを同じ時点で調査し、両者の関連を調査する研究デザインを英語で何というか。（すべて小文字）',
                    answerImg: [],
                    answer: 'cross-sectional study',
                    commentary: '横断研究：cross-sectional study。',
                },
                {
                    detailInfo: '5/12',
                    questionImg: [],
                    questionSentence: '横断研究によって示すことができないものは以下のどれか。もっとも当てはまるものを１つ選べ。',
                    answerImg: [],
                    choices: ["関連の強固性", "関連の特異性", "関連の時間性", "関連の一致性", "関連の整合性"],
                    answer: '関連の時間性',
                    commentary: '曝露とアウトカムの因果の方向が特定できない。時間的な前後関係は因果関係を推論する重要な根拠。関連の強固性は死亡率比や罹患率比が高いなどを指し、これも疫学調査では重要。',
                },
                {
                    detailInfo: '5/12',
                    questionImg: [],
                    questionSentence: '疾病Ａを発症していない対象者で、要因Ｂへの曝露者と非曝露者を対象として、20年間の疾病Ａの罹患率を調査した。この研究デザインを英語の記載せよ（すべて小文字）。',
                    answerImg: [],
                    answer: 'prospective cohort study',
                    commentary: 'cohort study , longitudinal studyとも。',
                },
                {
                    detailInfo: '5/12',
                    questionImg: [],
                    questionSentence: '2023年において、2000年から2010年にA病院に胃がんで手術を受けたすべての患者400名のカルテ情報を用いて、手術前の検査でアルブミンが低値の患者と、それ以外の患者で、術後10年間の死亡率を比較した。この研究は以下のどれか。',
                    answerImg: [],
                    choices: ["生態学的研究", "横断研究", "前向きコホート研究", "歴史的コホート研究", "ケースシリーズ研究"],
                    answer: '歴史的コホート研究',
                    commentary: 'historical cohort study。前向きコホート研究は現在から観察を開始するコホート研究。歴史的コホート研究は過去から過去の研究。横断研究は曝露とアウトカムが同時期。ケースシリーズ研究は対象者をグループ分けして関係を調べる研究。歴史的コホート研究は研究倫理（対象者のインフォームドコンセントを直接得ることができない場合がある）に問題があり、オプトアウト（あらかじめホームページに調査をする旨を記載しておく）などの配慮が求められる。',
                },

                {
                    detailInfo: '5/12',
                    questionImg: [],
                    questionSentence: '「一般内科医の性別と緊急入院患者の死亡率/再入院率」の関連において、考えられる交絡因子を、患者側の要因、医師側の要因に分けて、できるだけ多く挙げてください。 ',
                    answerImg: [],
                    answer: '患者側：年齢・性別・人種・初期診断名・併存疾患・世帯収入・薬剤使用。　病院要因：各病院ID。　医師要因：医師年齢・卒業大学・卒業プログラム（MDかDOか）',
                    commentary: '主治医の割り当てに何らかのルールがある場合は、一般内科医の力量に男女差がなかったとしてもアウトカムが変わる可能性がある→患者側・病院側の交絡因子。その他、性別による差ではなく医師の年齢・大学などによる差によってアウトカムが変化している可能性がある→医師側の交絡因子',
                },
                {
                    detailInfo: '5/12',
                    questionImg: [],
                    questionSentence: '「一般内科医の性別と緊急入院患者の死亡率/再入院率」の関連において、考えられる中間因子を挙げてください。',
                    answerImg: [],
                    answer: '一年あたりの担当患者数・入院期間・退院/転院先',
                    commentary: 'これらの要素は医師の性別が原因で変化し、最終的にアウトカムに影響を及ぼす可能性のある中間因子である。',
                },
                {
                    detailInfo: '5/19',
                    questionImg: [question0519],
                    questionSentence: '1990年に21万人の対象者を募集し、喫煙状況を調査した。その後、喫煙あり群と喫煙なし群の、肺がん死亡の発生を観察した結果を表に示す。10万人年あたりの喫煙による寄与危険を求めよ（回答は半角数値で入力し、単位は不要）。小数点以下の数値が得られた場合は、小数点第2位を四捨五入すること。',
                    answerImg: [],
                    answer: '25',
                    commentary: 'コホート研究の分析。10万人年あたりと指定があるので、それぞれの死亡数を10万人年あたりに直す。25.0でも正解。',
                },
                {
                    detailInfo: '5/19',
                    questionImg: [question0519],
                    questionSentence: '喫煙あり群と喫煙なし群の、肺がん死亡の発生を観察した結果を表に示す。上記の研究で、喫煙による寄与危険割合が何％かを求めよ。（回答は半角数値で入力し、単位は不要）。小数点以下の数値が得られた場合は、小数点第2位を四捨五入すること。',
                    answerImg: [],
                    answer: '83.3 (83.333...)',
                    commentary: '寄与危険 / 曝露群の死亡率 * 100。　その人が曝露していなければどのくらいリスクが下がるかを表す。',
                },
                {
                    detailInfo: '5/19',
                    questionImg: [question0519],
                    questionSentence: '喫煙あり群と喫煙なし群の、肺がん死亡の発生を観察した結果を表に示す。上記の研究での罹患率比から、喫煙による相対危険を求めよ（回答は半角数値で入力し、単位は不要）。小数点以下の数値が得られた場合は、小数点第2位を四捨五入すること。',
                    answerImg: [],
                    answer: '6',
                    commentary: '非曝露群の死亡率で、曝露群の死亡率を割る。6.0でも正解。',
                },
                {
                    detailInfo: '5/19',
                    questionImg: [question0519],
                    questionSentence: '喫煙あり群と喫煙なし群の、肺がん死亡の発生を観察した結果を表に示す。ある集団の喫煙者の割合が20％であった場合、この集団全体の肺がん死亡率（10万人年あたり）を求めよ。（回答は半角数値で入力し、単位は不要）小数点以下の数値が得られた場合は、小数点第2位を四捨五入すること。',
                    answerImg: [answer05190],
                    answer: '10',
                    commentary: '喫煙者・非喫煙者の割合がさらに与えられている。この場合は喫煙者の割合で重み付けを行う必要がある。集団寄与危険の問題を解くときはグラフを書いて求めるとわかりやすい。集団全体の死亡率はA+B+C 。10.0でも正解',
                },
                {
                    detailInfo: '5/19',
                    questionImg: [question0519],
                    questionSentence: '喫煙あり群と喫煙なし群の、肺がん死亡の発生を観察した結果を表に示す。ある集団の喫煙者の割合が20％であった場合、集団寄与危険（人口10万人あたり）を求めよ（回答は半角数値で入力し、単位は不要）。小数点以下の数値が得られた場合は、小数点第2位を四捨五入すること。',
                    answerImg: [answer05190],
                    answer: '5',
                    commentary: '集団寄与危険/人口寄与危険はAの部分の死亡率 →集団全体が喫煙しなければどの程度死亡率が下がったかをあらわす。Aは5(人口１０万人年あたり)。',
                },
                {
                    detailInfo: '5/19',
                    questionImg: [question0519],
                    questionSentence: '喫煙あり群と喫煙なし群の、肺がん死亡の発生を観察した結果を表に示す。ある集団の喫煙者の割合が20％であった場合、集団寄与危険割合は何％かを求めよ（回答は半角数値で入力し、単位は不要）。小数点以下の数値が得られた場合は、小数点第2位を四捨五入すること。',
                    answerImg: [answer05190],
                    answer: '50',
                    commentary: '集団寄与危険割合はA/A+B+Cなので、5/10 = 50%。個人のリスクではなく、その集団（地域など）での対策を論じるシチュエーションでは集団寄与危険やその割合を用いると有効。',
                },
                {
                    detailInfo: '5/19',
                    questionImg: [],
                    questionSentence: 'ある曝露因子Aは、疾病B発症の相対危険が4.0と報告されている。C市におけるＡに対する曝露者割合は、5％である場合、集団寄与危険割合は何％か（回答は半角数値で入力し、単位は不要）。小数点以下の数値が得られた場合は、小数点第2位を四捨五入すること。',
                    answerImg: [answer05191],
                    answer: '13.0 (13.04...)',
                    commentary: '集団寄与危険割合は{P(RR-1)} / {P(RR-1) + 1}となる。このタイプの問題はAの面積を求めることができれば解くことができる。Aの面積はP * (RR-1)なので、A+B+Cはさらに1を足した値となり、集団寄与危険割合はA/A+B+Cなので、求められる。具体的な死亡率が分かっていなくても、相対危険が先行論文などで判明していれば、曝露者の割合だけ調べれば集団寄与危険割合を求めることができるという点が重要。',
                },

                {
                    detailInfo: '5/19　2限目',
                    questionImg: [question05192],
                    questionSentence: 'この症例対照研究において、症例群における曝露オッズを求めよ　小数第３位は四捨五入して、小数第２位までの数値で答えてください。',
                    answerImg: [],
                    answer: '7.65',
                    commentary: '症例は膵臓癌ありの人で、対照は膵臓癌なしの人。曝露群はコーヒー飲む人で、非曝露群はコーヒー飲まない人。症例群の中で曝露オッズを求めるので、153/20 = 7.65。間違いで多かったのは曝露群の中で有病オッズを求めてしまった解答。',
                },
                {
                    detailInfo: '5/19　2限目',
                    questionImg: [question05192],
                    questionSentence: 'この症例対照研究において、対照群における曝露オッズを求めよ。　小数第３位は四捨五入して、小数第２位までの数値で答えてください。',
                    answerImg: [],
                    answer: '3.08',
                    commentary: '対照群：膵臓癌なしの人の中で曝露オッズを求めるので、271/88 = 3.07955...',
                },
                {
                    detailInfo: '5/19　2限目',
                    questionImg: [question05192],
                    questionSentence: 'この症例対照研究において、オッズ比を求めよ。　小数第３位は四捨五入して、小数第２位までの数値で答えてください。',
                    answerImg: [],
                    answer: '2.48',
                    commentary: '症例群の曝露オッズ / 対照群の曝露オッズ　で求める。',
                },
                {
                    detailInfo: '5/25',
                    questionImg: [],
                    questionSentence: '調査時点で疾病に罹患している患者100人と、罹患していない300人を対象に、過去における仮設因子Aへの曝露の有無を調査した。この研究デザインを英語で答えよ（すべて小文字）',
                    answerImg: [],
                    answer: 'case-control study/case control study',
                    commentary: '症例対照研究。最初に症例と対照を設定し、この人たちが過去に因子の曝露があるかどうかを後ろ向きに追いかける研究。分析にはオッズ比などを用いる。',
                },
                {
                    detailInfo: '5/25',
                    questionImg: [],
                    questionSentence: '症例対照研究の特性として正しいのはどれか。すべて選べ。',
                    choices: ["症例群と対照群の罹患率を算出する", "発生が稀な疾患に適している", "長期の観察期間を要する", "曝露の有無を調べる際、コホート研究と比べて、情報バイアスが生じやすい", "オッズ比は寄与危険に近似する", "１つの症例対照研究から、複数の曝露要因と１つのアウトカムの関連を調査できる    "],
                    answerImg: [],
                    answer: '2,4,6番目の選択肢',
                    commentary: '症例対照研究はコホート研究とは異なり、疾病を発症した人としていない人を設定してから調査するので、罹患率を調べる事はできない。稀な疾患をコホート研究で調べるためには大量の調査が必要。症例対照研究の調査は短い期間でできる。症例対照研究は過去に遡って調べる必要があるため、情報バイアス(Recall bias/症例群の人間の方が曝露について詳細に思い出しやすいなど)を含みやすい。コホート研究の場合はベースライン時の調査は確かである一方でアウトカムは脱落などが生じて不確かになりやすい→症例対照研究は曝露が、コホート研究はアウトカムが不確かになりやすい。寄与危険は2群の罹患率の差、相対危険が2群の罹患率の比で、オッズ比はこちらに近似する。オッズ比が1の場合は曝露とアウトカムが関連なし、1より大きい場合は危険因子に分類される。症例対照研究は最初にケースを提示してしまうので、アウトカムを変更できない一方で、曝露因子は追加で複数調査することができる。',
                },
                {
                    detailInfo: '5/25',
                    questionImg: [],
                    questionSentence: '10000人のコホート研究参加者のうち、肺がんに罹患した50名と、罹患していない200名について、コホート研究参加時に採取した凍結血液検体を用いて、遺伝子Aの有無を調査し、肺がん罹患との関連を検討した。この研究デザインを英語で答えよ（すべて小文字）',
                    answerImg: [],
                    answer: 'nested case-control study/nested case control study',
                    commentary: 'コホート内症例対照研究',
                },
                {
                    detailInfo: '5/25',
                    questionImg: [],
                    questionSentence: 'コホート内症例対照研究について正しい説明を選べ。 ',
                    choices: ["症例対照研究より選択バイアスが生じにくい", "コホート研究より曝露情報のバイアスが生じにくい", "症例群と対照群の罹患率を算出できる", "症例群と対照群の罹患率を算出できる", "１つのコホート内症例対照研究から、１つの曝露因子と複数のアウトカムの関連を調査できる"],
                    answerImg: [],
                    answer: '1,4',
                    commentary: '曝露情報のバイアスはコホート研究と同等（同じようにベースライン調査を行う）。基本的には症例対照研究なので罹患率は計算できない。コホート研究の場合はベースライン調査参加者全員の解析が必要であるが、コホート内症例対照研究の場合は対照群の解析を少なくすることができるので、費用を節約できる→解析費用が高額な場合に有効。コホート内症例対照研究は最初にアウトカムを設定しないといけないので、アウトカムを複数設定することはできない。一方で曝露因子については追加で複数調査することができる。ただし、そもそもベースライン時に全員の曝露因子を調べられている場合はコホート研究を行った方がいい。',
                },
                {
                    detailInfo: '5/25',
                    questionImg: [],
                    questionSentence: '研究参加に同意した4000人の対象者を無作為に2群に割り付け、一方にはcovid19ワクチン、一方には同じ量の生理食塩水を筋肉内注射し、その後6か月間の罹患率を調査した。この研究デザインを英語で答えよ（すべて小文字、略語はダメ）。',
                    answerImg: [],
                    answer: 'randomized controlled trial/randomised controlled trial',
                    commentary: '略語はRCT。ランダム化比較試験、無作為化比較試験とも。今回のような研究ではマスキングできる。仮に生理食塩水を注射しない場合はマスキング出来ないので、オープンラベル試験となる。マスキングには主に3通りのマスキングがある→Single Blind,Double Blind,Triple Blind(被験者・医者・分析者へのマスキング)。これらのマスキングはバイアスを減らすために行う。誰に対してマスキングしたかを明確にした方が良い。',
                },

                {
                    detailInfo: '5/26 1限目',
                    questionImg: [question0526],
                    questionSentence: '右の表は、重症冠動脈疾患に対する、経皮的冠動脈インターベンション（PCI）と冠動脈バイパス術（CABG)の治療効果を複合アウトカム、構成アウトカムに分けて示した研究結果である。もし自分自身がこの研究結果に基づいて、どちらかの治療を受けなければならないとすると、以下のどちらを選択しますか。また、選択した理由を記述してください',
                    answerImg: [],
                    answer: '経皮的冠動脈インターベンション（PCI） 複合アウトカムはCABGの方が有意にリスクが低いが、PCIの方はそのほとんどがやり直しであり、それ以外のアウトカムに限定するとCABGの優位性は判断できない。むしろ、StrokeはPCIの方が有意にリスクが小さいと言い切れるが、DeathとMyocardial Infarctionsの観点でCABGの方が有意にリスクが低いとは言い切れない（95%信頼区間が1をまたいでいる）ため、やり直し以外のアウトカムに限定するとPCIのほうがリスクが高いといえる。また、CABGは大手術となるためやり直しの判断をしにくいという観点も考慮した。いずれにしても、リスクが変わらないであれば低侵襲なPCIを選択する。',
                    commentary: '',
                },
                {
                    detailInfo: '5/26 2限目',
                    questionImg: [],
                    questionSentence: '無作為化試験の結果、健康対象者に対するアスピリンの有効性は、540人年の投与によって、１件の心筋梗塞を予防する効果に相当することが分かった。この指標を何と呼ぶか。英語で答えよ（すべて小文字、略語はダメ）',
                    answerImg: [],
                    answer: 'number needed to treat',
                    commentary: 'NNT。小さい方が良い治療である。計算方法も大事',
                },
                {
                    detailInfo: '5/26 2限目',
                    questionImg: [],
                    questionSentence: 'Intention to treat analysisの対義語となる分析方法を英語で記載せよ（すべて小文字）',
                    answerImg: [],
                    answer: 'per protocol analysis',
                    commentary: 'intention:企図、治療しようという意図についての分析。割り付けを守って分析するので、遵守しなかったとしても結果に含む。こちらが標準的な分析。一方でper protocol analysisは遵守した人についてのみの分析になるので、バイアスが生じやすい（一般的に遵守する人は治療予後が良い）',
                },
                {
                    detailInfo: '5/26 2限目',
                    questionImg: [],
                    questionSentence: '無作為化比較試験について正しい説明をすべて選べ',
                    choices: ["観察研究である", "介入の有無は、対象者の意思を尊重して決める", "プライマリアウトカムは原則１つである", "対象者へ介入内容をマスキングすることによってconcealmentは保持される", "ITT分析は介入効果を過大評価する", "研究開始前にプロトコールを公表する ", "充分なサンプルの無作為割り付けは、測定できない交絡因子の影響も調整する"],
                    answerImg: [],
                    answer: 'プライマリアウトカムは原則１つである。　研究開始前にプロトコールを公表する。　充分なサンプルの無作為割り付けは、測定できない交絡因子の影響も調整する',
                    commentary: '無作為化比較試験RCTは介入試験で、割り付けは完全にランダムで行われる。concealment(割り付けの内容を募集担当者から隠す→完全にランダムな割り付けを行うため)とmasking(患者・医者・分析者から割り付け内容を隠す→プラセボ効果などを均等にするため)は区別する必要がある。現在は中心割り付けcentral randomizationによって完全にランダムな割り付けを実現している。ITT分析は介入効果を過小評価する傾向があり、逆にPP分析は介入効果を過大評価する傾向がある。RCTには厳格な制度がある。RCTは未知の交絡因子についても均等であることを証明できるのが、コホート研究より優れている点',
                },
                {
                    detailInfo: '5/26 2限目',
                    questionImg: [],
                    questionSentence: '下記の論文構成のうち、本研究についての客観的事実のみを記載すべきセクションはどれか。すべて選べ。',
                    answerImg: [],
                    choices: ["Abstract", "Introduction", "Methods", "Results", "Discussion"],
                    answer: 'Methods , Results',
                    commentary: 'Abstract：要約はその後の内容をまとめたものなので、主観的な内容も含まれる',
                },
                {
                    detailInfo: '5/26 2限目',
                    questionImg: [],
                    questionSentence: '無作為化比較試験において、研究に必要な対象者数をどのように決定したかについて記載するのは、以下のどのセクションが最も適切か。',
                    answerImg: [],
                    choices: ["Abstract", "Introduction", "Methods", "Results", "Discussion"],
                    answer: 'Methods',
                    commentary: '理論的な必要サンプル数はMethodsに記載し、実際に集まったサンプル数はResultsに記載する',
                },
                {
                    detailInfo: '5/26 2限目',
                    questionImg: [],
                    questionSentence: '研究を行う目的について記載するのは、以下のどのセクションが最も適切か。',
                    answerImg: [],
                    choices: ["Introduction", "Methods", "Results", "Discussion"],
                    answer: 'Introduction',
                    commentary: '',
                },
                {
                    detailInfo: '5/26 2限目',
                    questionImg: [],
                    questionSentence: '新薬Aは、動物実験で標準治療薬Bより優れた成績を示した。AとBの治療効果を比較する無作為化比較試験（二重盲検法）におけるインフォームドコンセントの内容として不適切なのはどれか。１つ選べ。                    ',
                    answerImg: [],
                    choices: ["いったん研究への参加に同意したら、最後まで研究に参加してください", "研究参加を拒否しても、治療における不利益はありません", "研究参加中は、介入内容をお伝えすることはできません", "書面で、同意を確認いたします", "研究倫理に関するヘルシンキ宣言を遵守して実施します", "不明な点があれば、何でも質問してください"],
                    answer: 'いったん研究への参加に同意したら、最後まで研究に参加してください',
                    commentary: 'いつでも離脱できます、と言わないといけない。離脱した後の対象者には、治療内容を公開しても良い。RCTには厳格なルールが定められているので、違反すると大問題となる。',
                },
                // {
                //   detailInfo: '',
                //   questionImg: [],
                //   questionSentence:
                //     '',
                //   answerImg: [],
                //   answer: '',
                //   commentary: '',
                // },
            ],
        }, {
            groupTag: "2019本試験",
            groupContents: [{
                    detailInfo: '',
                    questionImg: [],
                    questionSentence: '介入研究を１つ選べ',
                    choices: ["横断研究", "症例対照研究", "無作為比比較試験", "前向きコホート研究", "コホート内症例対照研究"],
                    answerImg: [],
                    answer: '',
                    commentary: '',
                },
                // {
                //   detailInfo: '',
                //   questionImg: [],
                //   questionSentence:
                //     '',
                //   answerImg: [],
                //   answer: '',
                //   commentary: '',
                // },
            ]
        },
    ])
    const showQuestionList = () => {
        return questionList
    }
    return {
        showQuestionList,
        appName,
        jpName,
    }
}