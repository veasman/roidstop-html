"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[917],{2917:(R,c,e)=>{e.r(c),e.d(c,{AuthSignInModule:()=>L});var l=e(4521),g=e(7423),f=e(7446),a=e(7322),p=e(5245),h=e(7531),I=e(773),v=e(5804),A=e(7775),x=e(4466),s=e(3075),Z=e(8288),t=e(5e3),y=e(8951),C=e(9808),S=e(2494);const T=["signInNgForm"];function J(n,r){if(1&n&&(t.TgZ(0,"fuse-alert",23),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),t.xp6(1),t.hij(" ",o.alert.message," ")}}function F(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Email address is required "),t.qZA())}function w(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function N(n,r){1&n&&t._UZ(0,"mat-icon",24),2&n&&t.Q6J("svgIcon","heroicons_solid:eye")}function U(n,r){1&n&&t._UZ(0,"mat-icon",24),2&n&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function Q(n,r){1&n&&(t.TgZ(0,"span"),t._uU(1," Sign in "),t.qZA())}function b(n,r){1&n&&t._UZ(0,"mat-progress-spinner",25),2&n&&t.Q6J("diameter",24)("mode","indeterminate")}const M=function(){return["/sign-up"]},Y=function(){return["/forgot-password"]},j=[{path:"",component:(()=>{class n{constructor(o,i,m,u){this._activatedRoute=o,this._authService=i,this._formBuilder=m,this._router=u,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["charlie@moren.dev",[s.kI.required,s.kI.email]],password:["admin",s.kI.required],rememberMe:[""]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe({next:()=>{const o=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(o)},error:()=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}}))}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(l.gz),t.Y36(y.e),t.Y36(s.qu),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["auth-sign-in"]],viewQuery:function(o,i){if(1&o&&t.Gf(T,5),2&o){let m;t.iGM(m=t.CRH())&&(i.signInNgForm=m.first)}},decls:39,vars:18,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-full","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","mx-auto","sm:mx-0","justify-around","px-[40rem]"],[1,"w-12"],["src","assets/images/logo/logo.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","justify-between","w-full","mt-1.5"],[3,"color","formControlName"],[1,"text-md","font-medium","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6","rounded-md",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(o,i){if(1&o){const m=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Sign in"),t.qZA(),t.TgZ(7,"div",6)(8,"div"),t._uU(9,"Don't have an account?"),t.qZA(),t.TgZ(10,"a",7),t._uU(11,"Sign up "),t.qZA()(),t.YNc(12,J,2,5,"fuse-alert",8),t.TgZ(13,"form",9,10)(15,"mat-form-field",11)(16,"mat-label"),t._uU(17,"Email address"),t.qZA(),t._UZ(18,"input",12),t.YNc(19,F,2,0,"mat-error",13),t.YNc(20,w,2,0,"mat-error",13),t.qZA(),t.TgZ(21,"mat-form-field",11)(22,"mat-label"),t._uU(23,"Password"),t.qZA(),t._UZ(24,"input",14,15),t.TgZ(26,"button",16),t.NdJ("click",function(){t.CHM(m);const d=t.MAs(25);return d.type="password"===d.type?"text":"password"}),t.YNc(27,N,1,1,"mat-icon",17),t.YNc(28,U,1,1,"mat-icon",17),t.qZA(),t.TgZ(29,"mat-error"),t._uU(30," Password is required "),t.qZA()(),t.TgZ(31,"div",18)(32,"mat-checkbox",19),t._uU(33," Remember me "),t.qZA(),t.TgZ(34,"a",20),t._uU(35,"Forgot password? "),t.qZA()(),t.TgZ(36,"button",21),t.NdJ("click",function(){return i.signIn()}),t.YNc(37,Q,2,0,"span",13),t.YNc(38,b,1,2,"mat-progress-spinner",22),t.qZA()()()()()}if(2&o){const m=t.MAs(25);t.xp6(10),t.Q6J("routerLink",t.DdM(16,M)),t.xp6(2),t.Q6J("ngIf",i.showAlert),t.xp6(1),t.Q6J("formGroup",i.signInForm),t.xp6(5),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",i.signInForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",i.signInForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===m.type),t.xp6(1),t.Q6J("ngIf","text"===m.type),t.xp6(4),t.Q6J("color","primary")("formControlName","rememberMe"),t.xp6(2),t.Q6J("routerLink",t.DdM(17,Y)),t.xp6(2),t.Q6J("color","primary")("disabled",i.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",!i.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",i.signInForm.disabled)}},directives:[l.yS,C.O5,S.W,s._Y,s.JL,s.sg,a.KE,a.hX,h.Nt,s.Fj,s.JJ,s.u,a.TO,g.lW,a.R9,p.Hw,f.oG,I.Ou],encapsulation:2,data:{animation:Z.L}}),n})()}];let L=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(j),g.ot,f.p9,a.lN,p.Ps,h.c,I.Cq,v.J,A.fC,x.m]]}),n})()}}]);