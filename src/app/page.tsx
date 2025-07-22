'use client'

import { ArrowRight, Brain, Target, Users, CheckCircle, Star, Sparkles, Clock, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Scroll animations
      const elements = document.querySelectorAll('.scroll-animate')
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cursor glow effect */}
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* Animated background */}
      <div className="fixed inset-0 mesh-gradient opacity-30 animate-gradient" />
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50/90 via-white/95 to-blue-50/90" />

      {/* Floating elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-float" />
      <div className="fixed top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="fixed bottom-20 left-1/4 w-16 h-16 bg-pink-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Header */}
      <header className={`border-b transition-all duration-300 sticky top-0 z-50 ${
        isScrolled 
          ? 'glass-strong border-white/20 shadow-lg' 
          : 'border-transparent bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Brain className="h-10 w-10 text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-md animate-glow" />
            </div>
            <span className="text-2xl font-bold gradient-text">MindCoach AI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#solution" className="text-slate-600 hover:text-blue-600 transition-all duration-300 relative group">
              솔루션
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#target" className="text-slate-600 hover:text-blue-600 transition-all duration-300 relative group">
              대상
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#testimonials" className="text-slate-600 hover:text-blue-600 transition-all duration-300 relative group">
              후기
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
          <button className="btn-primary relative overflow-hidden group">
            <span className="relative z-10 flex items-center">
              시작하기
              <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              AI가 당신의{' '}
              <span className="gradient-text text-reveal relative">
                멘탈 코치
              </span>
              가<br />되어드립니다
            </h1>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              매일 감정과 퍼포먼스를 분석하고, 개인 맞춤 심리 훈련을 통해{' '}
              <span className="font-semibold text-blue-600">지속적인 성장</span>을 도와드립니다.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn-primary text-xl px-10 py-5 group">
              <span className="flex items-center">
                무료로 시작하기
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="glass border-2 border-white/30 text-slate-700 px-10 py-5 rounded-xl text-xl font-semibold hover:glass-strong transition-all duration-300 transform hover:scale-105">
              데모 보기
            </button>
          </div>
          
          {/* Floating stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass p-6 rounded-2xl card-hover">
              <div className="text-3xl font-bold gradient-text mb-2">10,000+</div>
              <div className="text-slate-600">활성 사용자</div>
            </div>
            <div className="glass p-6 rounded-2xl card-hover">
              <div className="text-3xl font-bold gradient-text mb-2">95%</div>
              <div className="text-slate-600">만족도</div>
            </div>
            <div className="glass p-6 rounded-2xl card-hover">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-slate-600">AI 지원</div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-500 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white/50" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              이런 <span className="gradient-text">고민</span>이 있으신가요?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              많은 사람들이 겪고 있는 공통적인 어려움들을 AI가 해결해드립니다
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl card-hover scroll-animate group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">자기계발 지속의 어려움</h3>
                <ul className="text-slate-600 space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span>의욕은 있지만 작심삼일로 끝나는 경우</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span>무엇을 해야 할지 방향 설정이 어려움</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span>피드백 없는 반복으로 동기 저하</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl card-hover scroll-animate group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">마음 관리의 어려움</h3>
                <ul className="text-slate-600 space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <span>자기 의심, 번아웃, 우울감, 불안</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <span>정신과나 코치 상담은 비싸고 예약 어려움</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <span>목표에 집중하기 어려운 상황</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl card-hover scroll-animate group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">성장 실감의 부족</h3>
                <ul className="text-slate-600 space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>자기 성찰과 기록 툴의 파편화</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>꾸준한 루틴과 목표 점검 어려움</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>개인 맞춤 동기 부여 시스템 부재</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              <span className="gradient-text">MindCoach AI</span>의 솔루션
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              AI가 매일 당신의 감정과 퍼포먼스를 분석하고, 심리 훈련을 통해 멘탈을 코칭합니다.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate">
              <h3 className="text-3xl font-bold text-slate-800 mb-8">핵심 기능</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">일일 감정 분석</h4>
                    <p className="text-slate-600 leading-relaxed">매일의 감정 상태를 AI가 분석하여 패턴을 파악합니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">개인 맞춤 코칭</h4>
                    <p className="text-slate-600 leading-relaxed">당신의 성향과 목표에 맞는 맞춤형 멘탈 훈련을 제공합니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">데이터 기반 피드백</h4>
                    <p className="text-slate-600 leading-relaxed">성과를 계량화하고 데이터 기반으로 개선점을 제시합니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">24/7 접근성</h4>
                    <p className="text-slate-600 leading-relaxed">언제든지 필요할 때 AI 코치에게 도움을 요청할 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scroll-animate">
              <div className="glass-strong p-10 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
                
                <div className="text-center relative z-10">
                  <div className="relative mb-8">
                    <Brain className="h-20 w-20 mx-auto mb-6 animate-float" />
                    <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl animate-glow" />
                  </div>
                  <h4 className="text-3xl font-bold text-slate-800 mb-6">AI 코치와 함께하는 성장</h4>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                    매일 10분, AI와의 대화를 통해 자신을 돌아보고 성장할 수 있습니다.
                  </p>
                  
                  {/* Interactive dashboard mockup */}
                  <div className="glass p-6 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span className="font-medium">오늘의 멘탈 점수</span>
                      <span className="font-bold text-lg gradient-text">85/100</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-primary h-3 rounded-full transition-all duration-1000 ease-out animate-gradient" style={{width: '85%'}}></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">92%</div>
                        <div className="text-xs text-slate-500">기분</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">78%</div>
                        <div className="text-xs text-slate-500">집중력</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">85%</div>
                        <div className="text-xs text-slate-500">동기</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section id="target" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white/90" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              이런 분들께 <span className="gradient-text">추천</span>합니다
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              다양한 분야의 전문가들이 MindCoach AI와 함께 성장하고 있습니다
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-strong p-10 rounded-3xl card-hover scroll-animate group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">자기계발에 투자하는 2030세대</h3>
                <ul className="text-slate-600 space-y-4">
                  <li className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="leading-relaxed">꾸준한 성장을 원하지만 혼자서는 어려움을 느끼는 분</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="leading-relaxed">자기 계발에 시간과 돈을 투자할 의향이 있는 분</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="leading-relaxed">디지털 도구를 활용한 체계적인 관리를 원하는 분</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-strong p-10 rounded-3xl card-hover scroll-animate group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">퍼포먼스 향상이 필요한 전문가</h3>
                <ul className="text-slate-600 space-y-4">
                  <li className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="leading-relaxed">운동 선수, CEO, 전문직 종사자</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="leading-relaxed">중요한 순간에 멘탈 관리가 필요한 분</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="leading-relaxed">지속적인 멘탈 훈련을 통한 성과 향상을 원하는 분</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              <span className="gradient-text">사용자 후기</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              실제 사용자들의 솔직한 경험담을 확인해보세요
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-strong p-8 rounded-3xl card-hover scroll-animate group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed italic">
                  &ldquo;매일 AI 코치와 대화하면서 내 감정을 객관적으로 볼 수 있게 되었어요. 
                  스트레스 관리가 훨씬 쉬워졌습니다.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">김</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-slate-800 text-lg">김○○</p>
                    <p className="text-slate-600">직장인, 29세</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-strong p-8 rounded-3xl card-hover scroll-animate group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed italic">
                  &ldquo;중요한 프레젠테이션 전에 멘탈 훈련을 받고 자신감이 크게 향상되었습니다. 
                  데이터로 성장을 확인할 수 있어서 좋아요.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">박</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-slate-800 text-lg">박○○</p>
                    <p className="text-slate-600">마케팅 팀장, 35세</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-strong p-8 rounded-3xl card-hover scroll-animate group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed italic">
                  &ldquo;24시간 언제든 상담받을 수 있어서 좋고, 개인 맞춤 훈련이 정말 효과적이에요. 
                  경기력이 눈에 띄게 향상되었습니다.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">이</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-slate-800 text-lg">이○○</p>
                    <p className="text-slate-600">프로 테니스 선수, 26세</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              지금 바로 <span className="text-yellow-300">시작</span>해보세요
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              AI 멘탈 코치와 함께 더 나은 자신을 만들어보세요. 
              첫 <span className="font-bold text-yellow-300">7일은 무료</span>로 체험하실 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl group">
                <span className="flex items-center">
                  7일 무료 체험 시작
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              <button className="border-2 border-white/50 glass text-white px-10 py-5 rounded-2xl text-xl font-bold hover:border-white transition-all duration-300 transform hover:scale-105">
                더 알아보기
              </button>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-ping" />
          <div className="absolute top-40 right-32 w-3 h-3 bg-yellow-300/50 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Brain className="h-10 w-10 text-blue-400" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md" />
                </div>
                <span className="text-2xl font-bold">MindCoach AI</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                AI 기반 멘탈 코칭으로 더 나은 내일을 만들어보세요.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">서비스</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">멘탈 코칭</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">감정 분석</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">성과 추적</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">개인 맞춤 훈련</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">지원</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">도움말</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">고객 지원</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">문의하기</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">회사</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">회사 소개</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">채용</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">개인정보처리방침</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">이용약관</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 MindCoach AI. All rights reserved. Made with ❤️ for better mental health.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
