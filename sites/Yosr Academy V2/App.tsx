import React, { useState, useEffect, useRef } from 'react';
import { Grade, ChildInfo, SubjectChoice } from './types.ts';
import { db, storage, IDUtil } from './lib/appwrite';

// --- Sub-components ---

const Navbar = ({ onCta, onHome }: { onCta: () => void; onHome: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20">
    <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
      <div className="flex items-center gap-4 cursor-pointer" onClick={onHome}>
        <div className="bg-gradient-to-br from-brand-amber to-brand-gold text-brand-navy w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl shadow-brand-amber/10">
          Y
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black text-white leading-none tracking-tight">أكاديمية يسر</span>
          <span className="text-[10px] font-bold text-brand-amber tracking-[0.2em] uppercase mt-1">Yosr Academy</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button 
          onClick={onCta}
          className="bg-brand-amber hover:bg-white text-brand-navy px-8 py-3 rounded-xl font-black transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-brand-amber/20"
        >
          سجل صغيرك
        </button>
      </div>
    </div>
  </nav>
);

const Hero = ({ onCta }: { onCta: () => void }) => (
  <section className="relative pt-48 pb-32 overflow-hidden grid-pattern">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-brand-navy border border-white/5 text-brand-amber text-sm font-black mb-10 tracking-wide">
        📍 تونس: الفرنسية والإنجليزية من الإبتدائي للباكالوريا
      </div>
      
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
        اللغات هي <span className="text-brand-amber underline decoration-brand-amber/30">المستقبل</span> <br/>
        والنجاح يبدا من <span className="text-brand-blue">يسر</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        أكاديمية يسر متخصصة في تمكين التلاميذ من اللغات الحية 
        <span className="text-white font-bold"> (الفرنسية والإنجليزية) </span> 
        باعتماد طرق حديثة تخلي الصغير يحب القراية ويتحسن في وقت قياسي.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button 
          onClick={onCta}
          className="w-full sm:w-auto px-12 py-6 bg-brand-blue hover:bg-blue-400 text-white text-xl font-black rounded-2xl shadow-2xl shadow-blue-500/20 transition-all transform hover:-translate-y-1"
        >
          أحجز حصة تقييمية مجانية
        </button>
        <div className="flex flex-col items-start gap-1 px-6 border-r border-white/10">
          <div className="flex items-center gap-2 text-brand-amber font-black">
            <span className="text-2xl">★ ★ ★ ★ ★</span>
          </div>
          <span className="text-sm text-gray-500 font-bold">أكثر من 500 ولي اختارونا</span>
        </div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-16 border-y border-white/5 bg-brand-navy">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { val: '90 دقيقة', label: 'مدة الحصة', sub: 'تركيز كامل ومتابعة' },
        { val: '8 حصص', label: 'في الشهر', sub: 'لضمان نسق تعلم مستقر' },
        { val: '12 تلميذ', label: 'كأقصى حد', sub: 'في القسم الواحد' },
        { val: 'أوقات مرنة', label: 'توقيت يتماشى معك', sub: 'طيلة أيام الأسبوع' }
      ].map((s, i) => (
        <div key={i} className="text-center group">
          <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-brand-amber transition-colors">{s.val}</div>
          <div className="text-brand-amber font-bold text-sm mb-1">{s.label}</div>
          <div className="text-gray-600 text-[10px] font-bold uppercase tracking-wider">{s.sub}</div>
        </div>
      ))}
    </div>
  </section>
);

const ProblemSolution = () => (
  <section className="py-32 bg-brand-deep overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          علاش صغيرك يحتاج <span className="text-brand-amber">أكاديمية يسر؟</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          اللغة هي المفتاح الأساسي للنجاح في كل المواد العلمية في النظام التعليمي التونسي.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-brand-navy p-10 md:p-12 rounded-[3rem] border border-white/5 flex flex-col h-full relative group">
          <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-xs font-black uppercase tracking-widest border border-red-500/20">تخوفات الأولياء</div>
          
          <div className="mt-8 mb-10 space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-white leading-snug">
              المشكلة مش في الذكاء <br/>
              <span className="text-red-400">المشكلة في اللغة</span>
            </h3>
            <div className="bg-white/5 p-6 rounded-2xl italic text-gray-300 border-r-4 border-red-500">
              " ولدي باهي في الحساب والإيقاظ، أما مشكلته الكبيرة في <span className="text-white font-bold italic">الفرنسية</span>. كي يوصل للإعدادي والثانوي، المواد العلمية الكل تولي بالفرنسية، وهذا اللي يخوفني عليه. "
              <div className="mt-4 not-italic font-bold text-gray-500 text-sm">— ولية تلميذ تونسي</div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              في تونس، التمكن من اللغات الأجنبية ضرورة. التلميذ اللي يعاني في الفرنسية ولا الإنجليزية، بش يلقى صعوبة كبيرة في الرياضيات والفيزياء والعلوم خاطر اللغة عائق قدامه.
            </p>
          </div>
        </div>

        <div className="bg-brand-navy p-10 md:p-12 rounded-[3rem] border border-brand-amber/30 amber-glow flex flex-col h-full relative group transform transition-all hover:scale-[1.01]">
          <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-brand-amber text-brand-navy text-xs font-black uppercase tracking-widest">منهجيتنا</div>
          
          <div className="mt-8 mb-10 space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-white leading-snug">
              فك العقدة <br/>
              <span className="text-brand-amber">واضمن النجاح</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              إحنا في يسر نركزوا على تحبيب اللغة للتلميذ باش يولي متمكن منها في القراءة والتواصل، وهذا ينعكس مباشرة على نتائجه في المواد العلمية.
            </p>
          </div>

          <div className="mt-auto space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-amber/10 border border-brand-amber/10">
              <span className="text-2xl mt-1">✓</span>
              <div>
                <p className="text-sm text-white font-bold">المحادثة والتواصل (Oral First)</p>
                <p className="text-xs text-gray-400">باش الصغير يفك عقدة التكلم قدام الناس.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-amber/10 border border-brand-amber/10">
              <span className="text-2xl mt-1">✓</span>
              <div>
                <p className="text-sm text-white font-bold">متابعة البرنامج الرسمي</p>
                <p className="text-xs text-gray-400">تحسين المعدل العام وضمان التفوق في الامتحانات.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = ({ onCta }: { onCta: () => void }) => (
  <section className="py-32 bg-brand-navy relative">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white mb-4">استثمر في مستقبل صغيرك</h2>
        <p className="text-gray-500 max-w-xl mx-auto">أسعارنا مدروسة لتوفير أفضل جودة تعليمية بأحسن ثمن في تونس.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-brand-deep p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all">
          <h3 className="text-gray-400 font-bold mb-4 uppercase tracking-widest text-sm">لغة واحدة</h3>
          <div className="flex items-baseline gap-2 mb-8" dir="ltr">
            <span className="text-6xl font-black text-white font-nums">60</span>
            <span className="text-xl text-gray-500 font-bold">DT/شهر</span>
          </div>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-gray-300 font-medium">
              <span className="text-brand-amber">✓</span> 8 حصص شهرياً
            </li>
            <li className="flex items-center gap-3 text-gray-300 font-medium">
              <span className="text-brand-amber">✓</span> مدة الحصة: 90 دقيقة
            </li>
            <li className="flex items-center gap-3 text-gray-300 font-medium">
              <span className="text-brand-amber">✓</span> أوقات مرنة تتماشى مع التلميذ
            </li>
          </ul>
          <button onClick={onCta} className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold text-white uppercase text-sm tracking-widest">
            إختيار لغة واحدة
          </button>
        </div>
        <div className="bg-brand-deep p-10 rounded-[2.5rem] border-2 border-brand-amber amber-glow relative transform md:-translate-y-4 shadow-2xl">
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-amber text-brand-navy px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">عرض خاص</div>
          <h3 className="text-brand-amber font-bold mb-4 uppercase tracking-widest text-sm">اللغتين معاً (Pack)</h3>
          <div className="flex items-baseline gap-2 mb-8" dir="ltr">
            <span className="text-6xl font-black text-white font-nums">110</span>
            <span className="text-xl text-brand-amber font-bold">DT/شهر</span>
          </div>
          <p className="text-amber-200/50 text-xs mb-6 font-bold">وفر 10 دينارات كاملة في الشهر!</p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-white font-medium">
              <span className="text-brand-amber text-lg">★</span> فرنسية + إنجليزية
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
              <span className="text-brand-amber text-lg">★</span> 16 حصة شهرياً (8 لكل لغة)
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
              <span className="text-brand-amber text-lg">★</span> حصص 90 دقيقة كاملة
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
              <span className="text-brand-amber text-lg">★</span> أولوية في التوقيت
            </li>
          </ul>
          <button onClick={onCta} className="w-full py-5 rounded-xl bg-brand-amber hover:bg-white text-brand-navy transition-all font-black shadow-xl shadow-brand-amber/20 uppercase text-sm tracking-widest">
            سجل في الـ Pack
          </button>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "وقتاش الحصص؟", a: "إحنا نوفروا أوقات مرنة طيلة أيام الأسبوع يختارها الولي والتلميذ حسب فراغهم، باش نضمنوا أحسن استيعاب للصغير." },
    { q: "مدة الحصة قداش؟", a: "كل حصة تدوم 90 دقيقة (ساعة ونص)، وهي المدة المثالية بيداغوجياً باش التلميذ يركز ويتعلم مهارة جديدة ويطبقها في نفس الوقت." },
    { q: "ولدي باهي في الحساب أما يكره الفرنسية، تنجموا تعاونوه؟", a: "أكيد! إحنا نركزوا على تحبيب اللغة للتلميذ عن طريق التواصل والمحادثة، وبش يلقى روحه متميز حتى في المواد العلمية اللي تتقرى بالفرنسية مبعد." },
    { q: "فمة متابعة للدروس متاع المكتب؟", a: "نعم، برنامجنا يتماشى مع البرنامج الرسمي لوزارة التربية التونسية، ونركزوا على النقاط اللي التلميذ يلقى فيها صعوبة في القسم." }
  ];

  return (
    <section id="faq" className="py-32 bg-brand-deep">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white text-center mb-16">أسئلة <span className="text-brand-amber">تتكرر</span></h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-brand-navy rounded-2xl border border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-right flex justify-between items-center group"
              >
                <span className="font-bold text-lg text-gray-200 group-hover:text-brand-amber transition-colors">{f.q}</span>
                <span className={`text-brand-amber transform transition-transform ${open === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed font-medium text-sm">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EnrollmentForm = () => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [children, setChildren] = useState<ChildInfo[]>([
    { id: '1', name: '', grade: Grade.Primary, subject: 'french' }
  ]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const updateChild = (id: string, field: keyof ChildInfo, value: any) => {
    setChildren(prev => prev.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const addChild = () => {
    setChildren(prev => [...prev, { id: Math.random().toString(), name: '', grade: Grade.Primary, subject: 'french' }]);
  };

  const removeChild = (id: string) => {
    if (children.length > 1) setChildren(prev => prev.filter(c => c.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const payload = {
        parentName,
        phone,
        children: JSON.stringify(children),
        status: 'pending'
      } as any;
      await db.createDocument('yosr_db', 'enrollments', IDUtil.unique(), payload);
      setStatus('success');
    } catch (err) {
      console.error('Enrollment submit error:', err);
      alert('تعذر إرسال الطلب. أرجو مراجعة إعدادات Appwrite (أذونات قاعدة البيانات).');
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto p-12 text-center bg-brand-deep rounded-[3rem] border border-brand-amber/20 amber-glow mt-24">
        <div className="w-20 h-20 bg-brand-amber/10 rounded-full flex items-center justify-center mx-auto mb-8">
           <span className="text-4xl">🌟</span>
        </div>
        <h3 className="text-3xl font-black text-white mb-6">يعطيك الصحة!</h3>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          سجلنا طلبك بنجاح. الفريق البيداغوجي باش يكلمك في الـ <span className="text-brand-amber font-bold">24 ساعة القادمة</span> باش نحددوا موعد الحصة التجريبية.
        </p>
        <button onClick={() => setStatus('idle')} className="text-brand-amber font-black hover:underline underline-offset-4">تقديم طلب آخر</button>
      </div>
    );
  }

  return (
    <div id="enroll" className="max-w-4xl mx-auto px-6 py-32 scroll-mt-24">
      <form onSubmit={handleSubmit} className="bg-brand-deep rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
        <div className="bg-brand-amber p-8 text-center">
          <h2 className="text-2xl font-black text-brand-navy">استمارة التسجيل النهائي</h2>
          <p className="text-brand-navy/70 text-sm mt-1 font-bold">عمر بياناتك وباش نكلموك نأكدوا معاك</p>
        </div>
        <div className="p-8 md:p-16 space-y-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">اسم الولي</label>
              <input required type="text" value={parentName} onChange={e => setParentName(e.target.value)} className="w-full bg-brand-navy border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-brand-amber outline-none transition-all placeholder:text-gray-800" placeholder="الإسم الكامل" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">رقم الهاتف</label>
              <input required type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="w-full bg-brand-navy border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-brand-amber outline-none transition-all font-nums tracking-widest" dir="ltr" placeholder="98 000 000" />
            </div>
          </div>

          <div className="h-px bg-white/5"></div>

          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black text-white tracking-tight">بيانات التلامذة</h3>
              <button type="button" onClick={addChild} className="text-brand-amber text-sm font-black bg-brand-amber/5 px-4 py-2 rounded-xl border border-brand-amber/10 hover:bg-brand-amber hover:text-brand-navy transition-all">+ إضافة طفل آخر</button>
            </div>
            
            <div className="space-y-8">
              {children.map((child, idx) => (
                <div key={child.id} className="p-8 bg-brand-navy/30 rounded-3xl border border-white/5 relative group hover:border-brand-blue/30 transition-all">
                  {children.length > 1 && (
                    <button type="button" onClick={() => removeChild(child.id)} className="absolute top-6 left-6 text-gray-700 hover:text-red-500 transition-colors">✕</button>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">إسم الطفل</label>
                      <input required value={child.name} onChange={e => updateChild(child.id, 'name', e.target.value)} className="w-full bg-brand-navy border border-white/5 rounded-xl px-4 py-3 text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">المستوى الدراسي</label>
                      <select value={child.grade} onChange={e => updateChild(child.id, 'grade', e.target.value)} className="w-full bg-brand-navy border border-white/5 rounded-xl px-4 py-3 text-white">
                        {Object.values(Grade).map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">اللغة المطلوبة</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'french', label: 'فرنسية' },
                        { id: 'english', label: 'إنجليزية' },
                        { id: 'both', label: 'الزوز (Pack)' }
                      ].map(opt => (
                        <button 
                          key={opt.id} 
                          type="button" 
                          onClick={() => updateChild(child.id, 'subject', opt.id)}
                          className={`py-3 rounded-xl text-xs font-black transition-all border ${child.subject === opt.id ? 'bg-brand-blue border-brand-blue text-white' : 'bg-brand-navy border-white/5 text-gray-500'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            disabled={status === 'loading'}
            type="submit" 
            className="w-full bg-brand-amber hover:bg-white text-brand-navy py-6 rounded-2xl font-black text-2xl shadow-2xl shadow-brand-amber/20 disabled:opacity-50 transform transition-all hover:-translate-y-1 active:scale-95"
          >
            {status === 'loading' ? 'جاري الإرسال...' : 'تأكيد التسجيل'}
          </button>
        </div>
      </form>
    </div>
  );
};

const TeacherApplication = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'french' as 'french' | 'english',
    experience: '',
    message: '',
    cv: null as File | null
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      let fileId = '';
      if (formData.cv) {
        const res = await storage.createFile('cvs', IDUtil.unique(), formData.cv as File);
        fileId = (res as any).$id;
      }
      const payload = {
        name: formData.name,
        phone: formData.phone,
        subject: formData.subject,
        experience: formData.experience,
        message: formData.message,
        cvFileId: fileId,
        status: 'received'
      } as any;
      await db.createDocument('yosr_db', 'recruitments', IDUtil.unique(), payload);
      setStatus('success');
    } catch (err) {
      console.error('Teacher submit error:', err);
      alert('تعذر إرسال الطلب. أرجو مراجعة إعدادات Appwrite أو صلاحيات الرفع.');
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <section className="min-h-screen pt-48 pb-32 flex items-center justify-center grid-pattern">
        <div className="max-w-2xl mx-auto p-12 text-center bg-brand-deep rounded-[3rem] border border-brand-amber/20 amber-glow">
          <div className="w-20 h-20 bg-brand-amber/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl">🎓</span>
          </div>
          <h3 className="text-3xl font-black text-white mb-6">طلبك وصل!</h3>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            شكراً لاهتمامك بالانضمام لعائلة أكاديمية يسر. الفريق البيداغوجي باش يراجع ملفك ويتصل بيك في أقرب وقت.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-brand-amber font-black hover:underline underline-offset-4"
          >
            الرجوع للرئيسية
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-48 pb-32 grid-pattern">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-brand-navy border border-white/5 text-brand-amber text-sm font-black mb-6 tracking-wide uppercase">
            Recruitment | التدريس
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            انضم لفريق <span className="text-brand-amber">أكاديمية يسر</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            نلوجوا على أفضل الكفاءات البيداغوجية في تونس باش نبنيو جيل متميز.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-brand-deep rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
          <div className="p-8 md:p-16 space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest">الإسم واللقب</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-brand-navy border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-brand-amber outline-none transition-all placeholder:text-gray-800" placeholder="الإسم الكامل" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest">رقم الهاتف</label>
                <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-brand-navy border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-brand-amber outline-none transition-all font-nums tracking-widest" dir="ltr" placeholder="98 000 000" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">المادة التي تدرسها</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'french', label: 'فرنسية' },
                  { id: 'english', label: 'إنجليزية' }
                ].map(opt => (
                  <button 
                    key={opt.id}
                    type="button"
                    onClick={() => setFormData({...formData, subject: opt.id as 'french' | 'english'})}
                    className={`py-4 rounded-xl text-xs font-black transition-all border ${formData.subject === opt.id ? 'bg-brand-blue border-brand-blue text-white' : 'bg-brand-navy border-white/5 text-gray-500'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">تحميل السيرة الذاتية (CV)</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-brand-navy border-2 border-dashed border-white/10 rounded-2xl p-8 text-center cursor-pointer hover:border-brand-amber hover:bg-brand-amber/5 transition-all group"
              >
                <input 
                  required
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept=".pdf,.doc,.docx"
                />
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📄</div>
                <p className="text-white font-bold mb-1">
                  {formData.cv ? formData.cv.name : 'إختر ملف السيرة الذاتية'}
                </p>
                <p className="text-gray-500 text-xs">PDF, DOC, DOCX (أقصى حجم 5MB)</p>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">سنوات الخبرة</label>
              <input required type="text" value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} className="w-full bg-brand-navy border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-brand-amber outline-none transition-all placeholder:text-gray-800" placeholder="مثلاً: 5 سنوات" />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">رسالة للفريق (اختياري)</label>
              <textarea rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-brand-navy border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-brand-amber outline-none transition-all placeholder:text-gray-800 resize-none" placeholder="قل لنا شيئاً عن تجربتك..." />
            </div>

            <button 
              disabled={status === 'loading'}
              type="submit" 
              className="w-full bg-brand-amber hover:bg-white text-brand-navy py-6 rounded-2xl font-black text-2xl shadow-2xl shadow-brand-amber/20 transition-all hover:-translate-y-1"
            >
              {status === 'loading' ? 'جاري الإرسال...' : 'تقديم الطلب'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Footer = ({ onApplyToTeach }: { onApplyToTeach: () => void }) => (
  <footer className="py-20 bg-brand-deep border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="bg-brand-amber text-brand-navy w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl">Y</div>
          <span className="text-2xl font-black text-white tracking-tighter">أكاديمية يسر</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
          نبني مستقبلاً أفضل لأبنائنا في تونس من خلال التمكن من اللغات الأجنبية.
        </p>
      </div>
      
      <div className="space-y-6">
        <h4 className="text-white font-black uppercase text-xs tracking-widest">روابط سريعة</h4>
        <ul className="space-y-3">
          <li>
            <button onClick={() => window.scrollTo(0, 0)} className="text-gray-500 hover:text-brand-amber font-bold text-sm transition-colors">الرئيسية</button>
          </li>
          <li>
            <button onClick={onApplyToTeach} className="text-brand-amber hover:text-white font-black text-sm transition-colors flex items-center gap-2">
              انضم إلينا كأستاذ
              <span className="text-xs bg-brand-amber/10 px-2 py-0.5 rounded-full">Recruitment</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="space-y-6 md:text-left">
        <h4 className="text-white font-black uppercase text-xs tracking-widest">اتصل بنا</h4>
        <div className="space-y-4 text-gray-500 font-bold text-sm font-nums" dir="ltr">
          <p>📞 +216 95 040 307</p>
          <p>✉️ contact@yosracademy.com</p>
          <p>📍 Tunis, Tunisia</p>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-gray-700 uppercase tracking-widest">
      <div>© {new Date().getFullYear()} YOSRACADEMY.COM</div>
      <div className="flex gap-6">
        <a href="https://www.facebook.com/yosracademytn" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
        <a href="https://www.instagram.com/yosr_academy/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'apply-teacher'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const scrollToEnroll = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyToTeach = () => {
    setCurrentView('apply-teacher');
  };

  return (
    <div className="min-h-screen">
      <Navbar onCta={scrollToEnroll} onHome={handleHomeClick} />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero onCta={scrollToEnroll} />
            <StatsSection />
            <ProblemSolution />
            <Pricing onCta={scrollToEnroll} />
            <FAQ />
            <EnrollmentForm />
          </>
        ) : (
          <TeacherApplication />
        )}
      </main>

      <Footer onApplyToTeach={handleApplyToTeach} />
    </div>
  );
}