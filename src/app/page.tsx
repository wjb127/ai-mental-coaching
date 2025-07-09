import { ArrowRight, Brain, Target, Users, Zap, CheckCircle, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-800">MindCoach AI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#solution" className="text-slate-600 hover:text-blue-600 transition-colors">솔루션</a>
            <a href="#target" className="text-slate-600 hover:text-blue-600 transition-colors">대상</a>
            <a href="#testimonials" className="text-slate-600 hover:text-blue-600 transition-colors">후기</a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base">
            시작하기
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            AI가 당신의 <span className="text-blue-600">멘탈 코치</span>가 되어드립니다
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            매일 감정과 퍼포먼스를 분석하고, 개인 맞춤 심리 훈련을 통해 지속적인 성장을 도와드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
              무료로 시작하기 <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-colors">
              데모 보기
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            이런 고민이 있으신가요?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">자기계발 지속의 어려움</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• 의욕은 있지만 작심삼일로 끝나는 경우</li>
                <li>• 무엇을 해야 할지 방향 설정이 어려움</li>
                <li>• 피드백 없는 반복으로 동기 저하</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">마음 관리의 어려움</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• 자기 의심, 번아웃, 우울감, 불안</li>
                <li>• 정신과나 코치 상담은 비싸고 예약 어려움</li>
                <li>• 목표에 집중하기 어려운 상황</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">성장 실감의 부족</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• 자기 성찰과 기록 툴의 파편화</li>
                <li>• 꾸준한 루틴과 목표 점검 어려움</li>
                <li>• 개인 맞춤 동기 부여 시스템 부재</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              MindCoach AI의 솔루션
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AI가 매일 당신의 감정과 퍼포먼스를 분석하고, 심리 훈련을 통해 멘탈을 코칭합니다.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">핵심 기능</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">일일 감정 분석</h4>
                    <p className="text-slate-600">매일의 감정 상태를 AI가 분석하여 패턴을 파악합니다.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">개인 맞춤 코칭</h4>
                    <p className="text-slate-600">당신의 성향과 목표에 맞는 맞춤형 멘탈 훈련을 제공합니다.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">데이터 기반 피드백</h4>
                    <p className="text-slate-600">성과를 계량화하고 데이터 기반으로 개선점을 제시합니다.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">24/7 접근성</h4>
                    <p className="text-slate-600">언제든지 필요할 때 AI 코치에게 도움을 요청할 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="text-center">
                <Brain className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-slate-800 mb-4">AI 코치와 함께하는 성장</h4>
                <p className="text-slate-600 mb-6">
                  매일 10분, AI와의 대화를 통해 자신을 돌아보고 성장할 수 있습니다.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                    <span>오늘의 멘탈 점수</span>
                    <span className="font-semibold">85/100</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section id="target" className="py-20 px-4 bg-slate-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            이런 분들께 추천합니다
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">자기계발에 투자하는 2030세대</h3>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>꾸준한 성장을 원하지만 혼자서는 어려움을 느끼는 분</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>자기 계발에 시간과 돈을 투자할 의향이 있는 분</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>디지털 도구를 활용한 체계적인 관리를 원하는 분</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">퍼포먼스 향상이 필요한 전문가</h3>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>운동 선수, CEO, 전문직 종사자</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>중요한 순간에 멘탈 관리가 필요한 분</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>지속적인 멘탈 훈련을 통한 성과 향상을 원하는 분</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            사용자 후기
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
                             <p className="text-slate-600 mb-4">
                 &ldquo;매일 AI 코치와 대화하면서 내 감정을 객관적으로 볼 수 있게 되었어요. 
                 스트레스 관리가 훨씬 쉬워졌습니다.&rdquo;
               </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">김</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-slate-800">김○○</p>
                  <p className="text-sm text-slate-600">직장인, 29세</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
                             <p className="text-slate-600 mb-4">
                 &ldquo;중요한 프레젠테이션 전에 멘탈 훈련을 받고 자신감이 크게 향상되었습니다. 
                 데이터로 성장을 확인할 수 있어서 좋아요.&rdquo;
               </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">박</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-slate-800">박○○</p>
                  <p className="text-sm text-slate-600">마케팅 팀장, 35세</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
                             <p className="text-slate-600 mb-4">
                 &ldquo;24시간 언제든 상담받을 수 있어서 좋고, 개인 맞춤 훈련이 정말 효과적이에요. 
                 경기력이 눈에 띄게 향상되었습니다.&rdquo;
               </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">이</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-slate-800">이○○</p>
                  <p className="text-sm text-slate-600">프로 테니스 선수, 26세</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            지금 바로 시작해보세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            AI 멘탈 코치와 함께 더 나은 자신을 만들어보세요. 
            첫 7일은 무료로 체험하실 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
              7일 무료 체험 시작 <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              더 알아보기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">MindCoach AI</span>
              </div>
              <p className="text-slate-400">
                AI 기반 멘탈 코칭으로 더 나은 내일을 만들어보세요.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">멘탈 코칭</a></li>
                <li><a href="#" className="hover:text-white transition-colors">감정 분석</a></li>
                <li><a href="#" className="hover:text-white transition-colors">성과 추적</a></li>
                <li><a href="#" className="hover:text-white transition-colors">개인 맞춤 훈련</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">지원</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">도움말</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">고객 지원</a></li>
                <li><a href="#" className="hover:text-white transition-colors">문의하기</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">회사</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">회사 소개</a></li>
                <li><a href="#" className="hover:text-white transition-colors">채용</a></li>
                <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
                <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 MindCoach AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
