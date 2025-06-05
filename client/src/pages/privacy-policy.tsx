import { motion } from "framer-motion"
import Layout from "@/components/layout"

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-black tracking-tight text-center">
            プライバシーポリシー
          </h1>
          <div className="w-16 h-px bg-black mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-medium text-black mb-4">1. 個人情報の収集について</h2>
              <p>
                株式会社ネオエルモ（以下「当社」）は、以下の場合に個人情報を収集することがあります。
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>お問い合わせフォームからのご連絡時</li>
                <li>サービスへのお申し込み時</li>
                <li>メールマガジンの購読時</li>
                <li>セミナーやイベントへの参加時</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">2. 個人情報の利用目的</h2>
              <p>収集した個人情報は、以下の目的で利用いたします。</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>お問い合わせへの回答</li>
                <li>サービスの提供</li>
                <li>メールマガジンの配信</li>
                <li>セミナーやイベントのご案内</li>
                <li>サービス向上のための分析</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">3. 個人情報の第三者提供</h2>
              <p>
                当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">4. 個人情報の管理</h2>
              <p>
                当社は、個人情報の正確性を保ち、これを安全に管理いたします。個人情報への不正アクセス、紛失、破壊、改ざん、漏洩などを防ぐため、必要かつ適切な安全管理措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">5. 個人情報の開示・訂正・削除</h2>
              <p>
                ご本人から個人情報の開示、訂正、削除等をご希望される場合には、当社の定める方法によりご本人であることを確認させていただいた上で、法令に従い、速やかに対応させていただきます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">6. クッキー（Cookie）について</h2>
              <p>
                当社のウェブサイトでは、利便性の向上のためクッキーを使用することがあります。ブラウザの設定によりクッキーの使用を無効にすることができますが、一部サービスがご利用いただけない場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">7. プライバシーポリシーの変更</h2>
              <p>
                当社は、必要に応じてこのプライバシーポリシーの内容を変更することがあります。変更後のプライバシーポリシーについては、当社が別途定める場合を除いて、当サイトに掲載したときから効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">8. お問い合わせ</h2>
              <p>
                個人情報の取扱いに関するお問い合わせは、以下までご連絡ください。
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded">
                <p className="font-medium">株式会社ネオエルモ</p>
                <p>個人情報保護担当者</p>
                <p>メール: info@neoelmo.com</p>
              </div>
            </section>

            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">制定日：2025年1月1日</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
} 