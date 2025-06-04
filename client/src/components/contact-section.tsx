import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { MapPin, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { apiRequest } from "@/lib/queryClient"
import { insertContactSchema, type InsertContact } from "@shared/schema"

export default function ContactSection() {
  const { toast } = useToast()
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      service: "",
      message: "",
    },
  })

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data)
      return response.json()
    },
    onSuccess: (data) => {
      toast({
        title: "送信完了",
        description: data.message,
      })
      form.reset()
    },
    onError: (error: any) => {
      toast({
        title: "送信エラー",
        description: error.message || "送信中にエラーが発生しました。",
        variant: "destructive",
      })
    },
  })

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              お問い合わせ
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              事業の課題やAI活用についてお気軽にご相談ください
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Corporate lighthouse navigation guidance" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover mb-8"
              />
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-3 w-5 h-5" />
                  <span>東京都練馬区</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-3 w-5 h-5" />
                  <span>contact@neoelmo.co.jp</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-blue-600 mr-3 w-5 h-5" />
                  <span>設立：2025年3月3日</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">お名前 *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">会社名</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">メールアドレス *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">ご興味のあるサービス</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all">
                              <SelectValue placeholder="選択してください" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ai-consulting">生成AI顧問</SelectItem>
                            <SelectItem value="business-growth">新規事業グロース</SelectItem>
                            <SelectItem value="scenario-maker">シナリオメーカー</SelectItem>
                            <SelectItem value="voicer">VOICER</SelectItem>
                            <SelectItem value="other">その他</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">お問い合わせ内容 *</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {contactMutation.isPending ? "送信中..." : "送信する"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
