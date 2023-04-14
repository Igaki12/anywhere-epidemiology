import { useState } from 'react'

// import from './img/answer/.png'

export const useQuestionList = () => {
  const appName = 'anywhere-epidemiology'
  const jpName = '公衆衛生学'
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '出席確認',
      groupContents: [
        {
          detailInfo: '4/14',
          questionImg: [],
          questionSentence:
            'Winslowの公衆衛生の定義で重要視された要素に当てはまらないのはどれか            ',
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
          questionSentence:
            '人口動態統計の結果についての記述で誤りはどれか            ',
          choices: [
            '総死亡数は増加傾向である',
            '粗死亡率は増加傾向である',
            '男性の粗死亡率は女性より高い',
            '年齢調整死亡率は減少傾向である',
            '１５－６４歳の死亡数は増加傾向である',
          ],
          answerImg: [],
          answer: '１５－６４歳の死亡数は増加傾向である',
          commentary:
            '人口動態統計は死亡届（医師の死亡診断書or死体検案書）をもとにした統計。単位人口当たりの死者数を示す粗死亡率でも増加傾向にある。人口構成の影響を除外した年齢調整死亡率では減少傾向にあるため、医療サービス自体に問題があるわけではない。0~15,16=64歳の年代の死亡数は減少し続けている。→死亡数が増加しているのは年齢構成の変化（高齢者の増加）のため',
        },
        {
          detailInfo: '4/14',
          questionImg: [],
          questionSentence:
            '下記の疾患のうち、死亡率で最も高いのはどれか            ',
          choices: ['老衰', '肺炎', '心疾患', '脳血管疾患', '自殺'],
          answerImg: [],
          answer: '心疾患',
          commentary:
            '日本人の死因は、1.悪性新生物、2.心疾患、3.老衰、4.脳血管疾患、5.肺炎。老衰は最近急増している。',
        },
        {
          detailInfo: '4/14',
          questionImg: [],
          questionSentence:
            'すべての医師が公衆衛生にかかわる必要があることを定めている法律は以下のどれか            ',
          choices: ['憲法', '医師法', '医療法', '地域保健法', '健康増進法'],
          answerImg: [],
          answer: '',
          commentary: '医師法第1条に定められている。',
        },
        {
          detailInfo: '4/14',
          questionImg: [],
          questionSentence:
            '１９７０年当時、わが国で最も死亡率が高かった死因はどれか            ',
          choices: ['悪性新生物', '心疾患', '脳血管疾患', '結核', '老衰'],
          answerImg: [],
          answer: '脳血管疾患',
          commentary:
            '戦後すぐは結核が1位だった→脳血管疾患が1位→現在は悪性新生物が1位。',
        },
        {
          detailInfo: '4/14',
          questionImg: [],
          questionSentence:
            '悪性新生物の記述疫学について正しいのはどれか            ',
          choices: [
            '悪性新生物の年齢調整死亡率は増加傾向である',
            '悪性新生物の死亡数は減少傾向である',
            '男性で最も死亡率が高いのは膵臓がんである',
            '胃がん死亡率は男女ともに減少傾向である',
            '肝臓がんの死亡率は横ばいである',
          ],
          answerImg: [],
          answer: '胃がん死亡率は男女ともに減少傾向である',
          commentary:
            'がんは年齢とともに増えてしまう病気である。男性で死亡率が最も高いのは肺がんである。胃がんも肝臓がんも感染症に起因するがんで、最近は減少傾向にある。',
        },
        {
          detailInfo: '4/14',
          questionImg: [],
          questionSentence:
            '感染症に起因するといわれているがんをすべて選べ     ',
          choices: ['胃がん', '肝臓がん', '肺がん', '子宮頸がん', '子宮体がん'],
          answerImg: [],
          answer: '胃がん、肝臓がん、子宮頸がん',
          commentary:
            'ヘリコバクターピロリ（細菌だが原虫に近い）、肝炎ウイルス、ヒューマンパピローマウイルス。子宮体がんは別。',
        },
        {
          detailInfo: '4/14',
          questionImg: [],
          questionSentence:
            '心疾患、脳血管疾患の死亡率について正しいのはどれか            ',
          choices: [
            '脳内出血が脳梗塞より多い',
            '虚血性心疾患は増加傾向である',
            '虚血性心疾患は心不全より多い',
            '脳血管疾患は増加傾向である',
            '心疾患は増加傾向である',
          ],
          answerImg: [],
          answer: '心疾患は増加傾向である',
          commentary:
            '昔は脳出血が多かったが、現状では脳梗塞が多くなった。虚血性心疾患（心筋梗塞など）より心不全の方が多い。脳血管疾患は減少傾向にある。心疾患は増加傾向にあり、その原因は心不全（高血圧などの生活習慣が原因）で、虚血性心疾患はカテーテル治療などの普及により横ばいor減少傾向にある。脳血管疾患は全体としては減少傾向にあり、脳梗塞が1980以降最も多い。脳血管疾患は死亡率としては減少傾向にあるが、要介護に陥る危険性が高く（認知症の次）、軽視できないとされている。',
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
