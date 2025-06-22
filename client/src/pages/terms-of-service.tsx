import { motion } from "framer-motion"
import Layout from "@/components/layout"

export default function TermsOfService() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-black tracking-tight text-center">
            特定商取引法に基づく表記
          </h1>
          <div className="w-16 h-px bg-black mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid gap-6">
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-lg font-medium text-black mb-2">販売業者</dt>
                <dd className="text-gray-700">株式会社ネオエルモ</dd>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <dt className="text-lg font-medium text-black mb-2">運営統括責任者</dt>
                <dd className="text-gray-700">代表取締役</dd>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <dt className="text-lg font-medium text-black mb-2">所在地</dt>
                <dd className="text-gray-700">
                  〒xxx-xxxx<br />
                  東京都xxx区xxx<br />
                  ※詳細な住所については、法令に基づき遅滞なく開示いたします
                </dd>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <dt className="text-lg font-medium text-black mb-2">電話番号</dt>
                <dd className="text-gray-700">
                  xxx-xxxx-xxxx<br />
                  ※お問い合わせはメールにて承っております
                </dd>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <dt className="text-lg font-medium text-black mb-2">メールアドレス</dt>
                <dd className="text-gray-700">info@neoelmo.com</dd>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <dt className="text-lg font-medium text-black mb-2">販売価格</dt>
                <dd className="text-gray-700">
                  各サービスページに記載<br />
                  ※価格は税込表示です
                </dd>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <dt className="text-lg font-medium text-black mb-2">支払方法</dt>
                <dd className="text-gray-700">
                  <ul className="list-disc ml-4 space-y-1">
                    <li>銀行振込</li>
                    <li>クレジットカード決済</li>
                    <li>その他（個別にご相談）</li>
                  </ul>
                </dd>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <dt className="text-lg font-medium text-black mb-2">支払時期</dt>
                <dd className="text-gray-700">
                  <ul className="list-disc ml-4 space-y-1">
                    <li>銀行振込：契約締結後、請求書発行から30日以内</li>
                    <li>クレジットカード：契約締結時</li>
                  </ul>
                </dd>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <dt className="text-lg font-medium text-black mb-2">サービス提供時期</dt>
                <dd className="text-gray-700">
                  契約締結後、個別に定める開始日より提供開始<br />
                  ※詳細は契約書にて明記いたします
                </dd>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <dt className="text-lg font-medium text-black mb-2">返品・キャンセルについて</dt>
                <dd className="text-gray-700">
                  サービスの性質上、原則として返品・返金は承っておりません。<br />
                  ただし、以下の場合は除きます：
                  <ul className="list-disc ml-4 mt-2 space-y-1">
                    <li>当社の責に帰すべき事由によりサービス提供が不可能となった場合</li>
                    <li>契約内容と著しく異なるサービスが提供された場合</li>
                  </ul>
                </dd>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <dt className="text-lg font-medium text-black mb-2">その他必要な事項</dt>
                <dd className="text-gray-700">
                  <ul className="list-disc ml-4 space-y-1">
                    <li>契約期間：個別契約により定める</li>
                    <li>契約の解除：契約書に定める条件による</li>
                    <li>準拠法：日本法</li>
                    <li>管轄裁判所：東京地方裁判所を第一審の専属的合意管轄裁判所とする</li>
                  </ul>
                </dd>
              </div>

              <div>
                <dt className="text-lg font-medium text-black mb-2">お問い合わせについて</dt>
                <dd className="text-gray-700">
                  <p className="mb-2">
                    商品・サービス、お支払い等に関するお問い合わせは、以下よりご連絡ください。
                  </p>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="font-medium">株式会社ネオエルモ　お客様窓口</p>
                    <p>メール: info@neoelmo.com</p>
                    <p>受付時間: 平日 9:00～18:00（土日祝日除く）</p>
                  </div>
                </dd>
              </div>
            </div>

            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">制定日：2025年1月1日</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
} 