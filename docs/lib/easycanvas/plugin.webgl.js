!function(r,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var e in n)("object"==typeof exports?exports:r)[e]=n[e]}}(this,function(){return function(r){function t(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return r[e].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=r,t.c=n,t.p="",t(0)}({0:function(r,t,n){r.exports=n(49)},3:function(r,t){"use strict";function n(r,t){if(r&&r.match(/^data:/))return void(t&&t(r));if(o[r])return void(o[r]!==e?t(o[r]):setTimeout(function(){n(r,t)},100));o[r]=e;var a=new XMLHttpRequest;a.onload=function(){var n=new FileReader;n.onloadend=function(){o[r]=n.result,t&&t(n.result)},n.readAsDataURL(a.response)},a.open("GET",r),a.responseType="blob",a.send()}var e="processing",o={};r.exports=n},19:function(r,t){"use strict";r.exports=function(){function r(r,t,n){n=n||new Float32Array(16);var e=t[0],o=t[1],a=t[2],i=t[3],u=t[4],f=t[5],c=t[6],s=t[7],m=t[8],d=t[9],l=t[10],A=t[11],v=t[12],E=t[13],_=t[14],g=t[15],p=r[0],T=r[1],R=r[2],h=r[3],x=r[4],y=r[5],b=r[6],F=r[7],w=r[8],L=r[9],M=r[10],S=r[11],U=r[12],B=r[13],I=r[14],C=r[15];return n[0]=e*p+o*x+a*w+i*U,n[1]=e*T+o*y+a*L+i*B,n[2]=e*R+o*b+a*M+i*I,n[3]=e*h+o*F+a*S+i*C,n[4]=u*p+f*x+c*w+s*U,n[5]=u*T+f*y+c*L+s*B,n[6]=u*R+f*b+c*M+s*I,n[7]=u*h+f*F+c*S+s*C,n[8]=m*p+d*x+l*w+A*U,n[9]=m*T+d*y+l*L+A*B,n[10]=m*R+d*b+l*M+A*I,n[11]=m*h+d*F+l*S+A*C,n[12]=v*p+E*x+_*w+g*U,n[13]=v*T+E*y+_*L+g*B,n[14]=v*R+E*b+_*M+g*I,n[15]=v*h+E*F+_*S+g*C,n}function t(r,t,n){return n=n||new Float32Array(3),n[0]=r[0]+t[0],n[1]=r[1]+t[1],n[2]=r[2]+t[2],n}function n(r,t,n){return n=n||new Float32Array(3),n[0]=r[0]-t[0],n[1]=r[1]-t[1],n[2]=r[2]-t[2],n}function e(r,t){t=t||new Float32Array(3);var n=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);return n>1e-5&&(t[0]=r[0]/n,t[1]=r[1]/n,t[2]=r[2]/n),t}function o(r,t,n){return n=n||new Float32Array(3),n[0]=r[1]*t[2]-r[2]*t[1],n[1]=r[2]*t[0]-r[0]*t[2],n[2]=r[0]*t[1]-r[1]*t[0],n}function a(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function i(r,t){var n=r[0]-t[0],e=r[1]-t[1],o=r[2]-t[2];return n*n+e*e+o*o}function u(r,t){return Math.sqrt(i(r,t))}function f(r){return r=r||new Float32Array(16),r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function c(r,t){return t=t||new Float32Array(16),t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15],t}function s(r,t,a,i){i=i||new Float32Array(16);var u=e(n(r,t)),f=e(o(a,u)),c=e(o(u,f));return i[0]=f[0],i[1]=f[1],i[2]=f[2],i[3]=0,i[4]=c[0],i[5]=c[1],i[6]=c[2],i[7]=0,i[8]=u[0],i[9]=u[1],i[10]=u[2],i[11]=0,i[12]=r[0],i[13]=r[1],i[14]=r[2],i[15]=1,i}function m(r,t,n,e,o){o=o||new Float32Array(16);var a=Math.tan(.5*Math.PI-.5*r),i=1/(n-e);return o[0]=a/t,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=a,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(n+e)*i,o[11]=-1,o[12]=0,o[13]=0,o[14]=n*e*i*2,o[15]=0,o}function d(r,t,n,e,o,a,i){return i=i||new Float32Array(16),i[0]=2/(t-r),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(e-n),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2/(o-a),i[11]=0,i[12]=(r+t)/(r-t),i[13]=(n+e)/(n-e),i[14]=(o+a)/(o-a),i[15]=1,i}function l(r,t,n,e,o,a){var i=t-r,u=e-n,f=a-o;return dst[0]=2*o/i,dst[1]=0,dst[2]=0,dst[3]=0,dst[4]=0,dst[5]=2*o/u,dst[6]=0,dst[7]=0,dst[8]=(r+t)/i,dst[9]=(e+n)/u,dst[10]=-(a+o)/f,dst[11]=-1,dst[12]=0,dst[13]=0,dst[14]=-2*o*a/f,dst[15]=0,dst}function A(r,t,n,e){return e=e||new Float32Array(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=r,e[13]=t,e[14]=n,e[15]=1,e}function v(r,t,n,e,o){o=o||new Float32Array(16);var a=r[0],i=r[1],u=r[2],f=r[3],c=r[4],s=r[5],m=r[6],d=r[7],l=r[8],A=r[9],v=r[10],E=r[11],_=r[12],g=r[13],p=r[14],T=r[15];return r!==o&&(o[0]=a,o[1]=i,o[2]=u,o[3]=f,o[4]=c,o[5]=s,o[6]=m,o[7]=d,o[8]=l,o[9]=A,o[10]=v,o[11]=E),o[12]=a*t+c*n+l*e+_,o[13]=i*t+s*n+A*e+g,o[14]=u*t+m*n+v*e+p,o[15]=f*t+d*n+E*e+T,o}function E(r,t){t=t||new Float32Array(16);var n=Math.cos(r),e=Math.sin(r);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=e,t[7]=0,t[8]=0,t[9]=-e,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function _(r,t,n){n=n||new Float32Array(16);var e=r[4],o=r[5],a=r[6],i=r[7],u=r[8],f=r[9],c=r[10],s=r[11],m=Math.cos(t),d=Math.sin(t);return n[4]=m*e+d*u,n[5]=m*o+d*f,n[6]=m*a+d*c,n[7]=m*i+d*s,n[8]=m*u-d*e,n[9]=m*f-d*o,n[10]=m*c-d*a,n[11]=m*s-d*i,r!==n&&(n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15]),n}function g(r,t){t=t||new Float32Array(16);var n=Math.cos(r),e=Math.sin(r);return t[0]=n,t[1]=0,t[2]=-e,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=e,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function p(r,t,n){n=n||new Float32Array(16);var e=r[0],o=r[1],a=r[2],i=r[3],u=r[8],f=r[9],c=r[10],s=r[11],m=Math.cos(t),d=Math.sin(t);return n[0]=m*e-d*u,n[1]=m*o-d*f,n[2]=m*a-d*c,n[3]=m*i-d*s,n[8]=m*u+d*e,n[9]=m*f+d*o,n[10]=m*c+d*a,n[11]=m*s+d*i,r!==n&&(n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15]),n}function T(r,t){t=t||new Float32Array(16);var n=Math.cos(r),e=Math.sin(r);return t[0]=n,t[1]=e,t[2]=0,t[3]=0,t[4]=-e,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function R(r,t,n){n=n||new Float32Array(16);var e=r[0],o=r[1],a=r[2],i=r[3],u=r[4],f=r[5],c=r[6],s=r[7],m=Math.cos(t),d=Math.sin(t);return n[0]=m*e+d*u,n[1]=m*o+d*f,n[2]=m*a+d*c,n[3]=m*i+d*s,n[4]=m*u-d*e,n[5]=m*f-d*o,n[6]=m*c-d*a,n[7]=m*s-d*i,r!==n&&(n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15]),n}function h(r,t,n){n=n||new Float32Array(16);var e=r[0],o=r[1],a=r[2],i=Math.sqrt(e*e+o*o+a*a);e/=i,o/=i,a/=i;var u=e*e,f=o*o,c=a*a,s=Math.cos(t),m=Math.sin(t),d=1-s;return n[0]=u+(1-u)*s,n[1]=e*o*d+a*m,n[2]=e*a*d-o*m,n[3]=0,n[4]=e*o*d-a*m,n[5]=f+(1-f)*s,n[6]=o*a*d+e*m,n[7]=0,n[8]=e*a*d+o*m,n[9]=o*a*d-e*m,n[10]=c+(1-c)*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function x(r,t,n,e){e=e||new Float32Array(16);var o=t[0],a=t[1],i=t[2],u=Math.sqrt(o*o+a*a+i*i);o/=u,a/=u,i/=u;var f=o*o,c=a*a,s=i*i,m=Math.cos(n),d=Math.sin(n),l=1-m,A=f+(1-f)*m,v=o*a*l+i*d,E=o*i*l-a*d,_=o*a*l-i*d,g=c+(1-c)*m,p=a*i*l+o*d,T=o*i*l+a*d,R=a*i*l-o*d,h=s+(1-s)*m,x=r[0],y=r[1],b=r[2],F=r[3],w=r[4],L=r[5],M=r[6],S=r[7],U=r[8],B=r[9],I=r[10],C=r[11];return e[0]=A*x+v*w+E*U,e[1]=A*y+v*L+E*B,e[2]=A*b+v*M+E*I,e[3]=A*F+v*S+E*C,e[4]=_*x+g*w+p*U,e[5]=_*y+g*L+p*B,e[6]=_*b+g*M+p*I,e[7]=_*F+g*S+p*C,e[8]=T*x+R*w+h*U,e[9]=T*y+R*L+h*B,e[10]=T*b+R*M+h*I,e[11]=T*F+R*S+h*C,r!==e&&(e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15]),e}function y(r,t,n,e){return e=e||new Float32Array(16),e[0]=r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function b(r,t,n,e,o){return o=o||new Float32Array(16),o[0]=t*r[0],o[1]=t*r[1],o[2]=t*r[2],o[3]=t*r[3],o[4]=n*r[4],o[5]=n*r[5],o[6]=n*r[6],o[7]=n*r[7],o[8]=e*r[8],o[9]=e*r[9],o[10]=e*r[10],o[11]=e*r[11],r!==o&&(o[12]=r[12],o[13]=r[13],o[14]=r[14],o[15]=r[15]),o}function F(r,t){t=t||new Float32Array(16);var n=r[0],e=r[1],o=r[2],a=r[3],i=r[4],u=r[5],f=r[6],c=r[7],s=r[8],m=r[9],d=r[10],l=r[11],A=r[12],v=r[13],E=r[14],_=r[15],g=d*_,p=E*l,T=f*_,R=E*c,h=f*l,x=d*c,y=o*_,b=E*a,F=o*l,w=d*a,L=o*c,M=f*a,S=s*v,U=A*m,B=i*v,I=A*u,C=i*m,P=s*u,O=n*v,D=A*e,N=n*m,V=s*e,H=n*u,X=i*e,Y=g*u+R*m+h*v-(p*u+T*m+x*v),G=p*e+y*m+w*v-(g*e+b*m+F*v),k=T*e+b*u+L*v-(R*e+y*u+M*v),j=x*e+F*u+M*m-(h*e+w*u+L*m),z=1/(n*Y+i*G+s*k+A*j);return t[0]=z*Y,t[1]=z*G,t[2]=z*k,t[3]=z*j,t[4]=z*(p*i+T*s+x*A-(g*i+R*s+h*A)),t[5]=z*(g*n+b*s+F*A-(p*n+y*s+w*A)),t[6]=z*(R*n+y*i+M*A-(T*n+b*i+L*A)),t[7]=z*(h*n+w*i+L*s-(x*n+F*i+M*s)),t[8]=z*(S*c+I*l+C*_-(U*c+B*l+P*_)),t[9]=z*(U*a+O*l+V*_-(S*a+D*l+N*_)),t[10]=z*(B*a+D*c+H*_-(I*a+O*c+X*_)),t[11]=z*(P*a+N*c+X*l-(C*a+V*c+H*l)),t[12]=z*(B*d+P*E+U*f-(C*E+S*f+I*d)),t[13]=z*(N*E+S*o+D*d-(O*d+V*E+U*o)),t[14]=z*(O*f+X*E+I*o-(H*E+B*o+D*f)),t[15]=z*(H*d+C*o+V*f-(N*f+X*d+P*o)),t}function w(r,t,n){n=n||new Float32Array(4);for(var e=0;4>e;++e){n[e]=0;for(var o=0;4>o;++o)n[e]+=t[o]*r[4*o+e]}return n}function L(r,t,n){n=n||new Float32Array(3);var e=t[0],o=t[1],a=t[2],i=e*r[3]+o*r[7]+a*r[11]+r[15];return n[0]=(e*r[0]+o*r[4]+a*r[8]+r[12])/i,n[1]=(e*r[1]+o*r[5]+a*r[9]+r[13])/i,n[2]=(e*r[2]+o*r[6]+a*r[10]+r[14])/i,n}function M(r,t,n){n=n||new Float32Array(3);var e=t[0],o=t[1],a=t[2];return n[0]=e*r[0]+o*r[4]+a*r[8],n[1]=e*r[1]+o*r[5]+a*r[9],n[2]=e*r[2]+o*r[6]+a*r[10],n}function S(r,t,n){n=n||new Float32Array(3);var e=F(r),o=t[0],a=t[1],i=t[2];return n[0]=o*e[0]+a*e[1]+i*e[2],n[1]=o*e[4]+a*e[5]+i*e[6],n[2]=o*e[8]+a*e[9]+i*e[10],n}function U(r,t){return t=t||new Float32Array(16),t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}return{copy:U,lookAt:s,addVectors:t,subtractVectors:n,distance:u,distanceSq:i,normalize:e,cross:o,dot:a,identity:f,transpose:c,orthographic:d,frustum:l,perspective:m,translation:A,translate:v,xRotation:E,yRotation:g,zRotation:T,xRotate:_,yRotate:p,zRotate:R,axisRotation:h,axisRotate:x,scaling:y,scale:b,multiply:r,inverse:F,transformVector:w,transformPoint:L,transformDirection:M,transformNormal:S}}},20:function(r,t){"use strict";r.exports=function(){function r(r){I.console&&(I.console.error?I.console.error(r):I.console.log&&I.console.log(r))}function t(t,n,e,o){var a=o||r,i=t.createShader(e);t.shaderSource(i,n),t.compileShader(i);var u=t.getShaderParameter(i,t.COMPILE_STATUS);if(!u){var f=t.getShaderInfoLog(i);return a("*** Error compiling shader '"+i+"':"+f),t.deleteShader(i),null}return i}function n(t,n,e,o,a){var i=a||r,u=t.createProgram();n.forEach(function(r){t.attachShader(u,r)}),e&&e.forEach(function(r,n){t.bindAttribLocation(u,o?o[n]:n,r)}),t.linkProgram(u);var f=t.getProgramParameter(u,t.LINK_STATUS);if(!f){var c=t.getProgramInfoLog(u);return i("Error in program linking:"+c),t.deleteProgram(u),null}return u}function e(r,n,e,o){var a,i="",u=document.getElementById(n);if(!u)throw"*** Error: unknown script element"+n;if(i=u.text,!e)if("x-shader/x-vertex"===u.type)a=r.VERTEX_SHADER;else if("x-shader/x-fragment"===u.type)a=r.FRAGMENT_SHADER;else if(a!==r.VERTEX_SHADER&&a!==r.FRAGMENT_SHADER)throw"*** Error: unknown shader type";return t(r,i,e?e:a,o)}function o(r,t,o,a,i){for(var u=[],f=0;t.length>f;++f)u.push(e(r,t[f],r[C[f]],i));return n(r,u,o,a,i)}function a(r,e,o,a,i){for(var u=[],f=0;e.length>f;++f)u.push(t(r,e[f],r[C[f]],i));return n(r,u,o,a,i)}function i(r,t){return t===r.SAMPLER_2D?r.TEXTURE_2D:t===r.SAMPLER_CUBE?r.TEXTURE_CUBE_MAP:void 0}function u(r,t){function n(t,n){var o=r.getUniformLocation(t,n.name),a=n.type,u=n.size>1&&"[0]"===n.name.substr(-3);if(a===r.FLOAT&&u)return function(t){r.uniform1fv(o,t)};if(a===r.FLOAT)return function(t){r.uniform1f(o,t)};if(a===r.FLOAT_VEC2)return function(t){r.uniform2fv(o,t)};if(a===r.FLOAT_VEC3)return function(t){r.uniform3fv(o,t)};if(a===r.FLOAT_VEC4)return function(t){r.uniform4fv(o,t)};if(a===r.INT&&u)return function(t){r.uniform1iv(o,t)};if(a===r.INT)return function(t){r.uniform1i(o,t)};if(a===r.INT_VEC2)return function(t){r.uniform2iv(o,t)};if(a===r.INT_VEC3)return function(t){r.uniform3iv(o,t)};if(a===r.INT_VEC4)return function(t){r.uniform4iv(o,t)};if(a===r.BOOL)return function(t){r.uniform1iv(o,t)};if(a===r.BOOL_VEC2)return function(t){r.uniform2iv(o,t)};if(a===r.BOOL_VEC3)return function(t){r.uniform3iv(o,t)};if(a===r.BOOL_VEC4)return function(t){r.uniform4iv(o,t)};if(a===r.FLOAT_MAT2)return function(t){r.uniformMatrix2fv(o,!1,t)};if(a===r.FLOAT_MAT3)return function(t){r.uniformMatrix3fv(o,!1,t)};if(a===r.FLOAT_MAT4)return function(t){r.uniformMatrix4fv(o,!1,t)};if((a===r.SAMPLER_2D||a===r.SAMPLER_CUBE)&&u){for(var f=[],c=0;c<info.size;++c)f.push(e++);return function(t,n){return function(e){r.uniform1iv(o,n),e.forEach(function(e,o){r.activeTexture(r.TEXTURE0+n[o]),r.bindTexture(t,e)})}}(i(r,a),f)}if(a===r.SAMPLER_2D||a===r.SAMPLER_CUBE)return function(t,n){return function(e){r.uniform1i(o,n),r.activeTexture(r.TEXTURE0+n),r.bindTexture(t,e)}}(i(r,a),e++);throw"unknown type: 0x"+a.toString(16)}for(var e=0,o={},a=r.getProgramParameter(t,r.ACTIVE_UNIFORMS),u=0;a>u;++u){var f=r.getActiveUniform(t,u);if(!f)break;var c=f.name;"[0]"===c.substr(-3)&&(c=c.substr(0,c.length-3));var s=n(t,f);o[c]=s}return o}function f(r,t){r=r.uniformSetters||r,Object.keys(t).forEach(function(n){var e=r[n];e&&e(t[n])})}function c(r,t){function n(t){return function(n){r.bindBuffer(r.ARRAY_BUFFER,n.buffer),r.enableVertexAttribArray(t),r.vertexAttribPointer(t,n.numComponents||n.size,n.type||r.FLOAT,n.normalize||!1,n.stride||0,n.offset||0)}}for(var e={},o=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES),a=0;o>a;++a){var i=r.getActiveAttrib(t,a);if(!i)break;var u=r.getAttribLocation(t,i.name);e[i.name]=n(u)}return e}function s(r,t){r=r.attribSetters||r,Object.keys(t).forEach(function(n){var e=r[n];e&&e(t[n])})}function m(r,t,n,e){var o=r.createVertexArray();return r.bindVertexArray(o),s(t,n),e&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e),r.bindVertexArray(null),o}function d(r,t,n){return m(r,t.attribSetters||t,n.attribs,n.indices)}function l(r,t,n,e,o){t=t.map(function(r){var t=document.getElementById(r);return t?t.text:r});var a=webglUtils.createProgramFromSources(r,t,n,e,o);if(!a)return null;var i=u(r,a),f=c(r,a);return{program:a,uniformSetters:i,attribSetters:f}}function A(r,t,n){s(t,n.attribs),n.indices&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n.indices)}function v(r,t){for(var n=0;P.length>n;++n){var e=P[n]+t,o=r.getExtension(e);if(o)return o}}function E(r,t){t=t||1;var n=r.clientWidth*t|0,e=r.clientHeight*t|0;return(r.width!==n||r.height!==e)&&(r.width=n,r.height=e,!0)}function _(r,t){var n=0;return r.push=function(){for(var t=0;arguments.length>t;++t){var e=arguments[t];if(e instanceof Array||e.buffer&&e.buffer instanceof ArrayBuffer)for(var o=0;e.length>o;++o)r[n++]=e[o];else r[n++]=e}},r.reset=function(r){n=r||0},r.numComponents=t,Object.defineProperty(r,"numElements",{get:function(){return this.length/this.numComponents|0}}),r}function g(r,t,n){var e=n||Float32Array;return _(new e(r*t),r)}function p(r,t,n,e){n=n||r.ARRAY_BUFFER;var o=r.createBuffer();return r.bindBuffer(n,o),r.bufferData(n,t,e||r.STATIC_DRAW),o}function T(r){return"indices"!==r}function R(r){var t={};return Object.keys(r).filter(T).forEach(function(r){t["a_"+r]=r}),t}function h(r,t){if(t instanceof Int8Array)return r.BYTE;if(t instanceof Uint8Array)return r.UNSIGNED_BYTE;if(t instanceof Int16Array)return r.SHORT;if(t instanceof Uint16Array)return r.UNSIGNED_SHORT;if(t instanceof Int32Array)return r.INT;if(t instanceof Uint32Array)return r.UNSIGNED_INT;if(t instanceof Float32Array)return r.FLOAT;throw"unsupported typed array type"}function x(r){return r instanceof Int8Array||r instanceof Uint8Array}function y(r){return r.buffer&&r.buffer instanceof ArrayBuffer}function b(r,t){var n;if(n=r.indexOf("coord")<0?r.indexOf("color")<0?3:4:2,t%n>0)throw"can not guess numComponents. You should specify it.";return n}function F(r,t){if(y(r))return r;Array.isArray(r)&&(r={data:r}),r.numComponents||(r.numComponents=b(t,r.length));var n=r.type;n||"indices"===t&&(n=Uint16Array);var e=g(r.numComponents,r.data.length/r.numComponents|0,n);return e.push(r.data),e}function w(r,t,n){var e=n||R(t),o={};return Object.keys(e).forEach(function(n){var a=e[n],i=F(t[a],a);o[n]={buffer:p(r,i),numComponents:i.numComponents||b(a),type:h(r,i),normalize:x(i)}}),o}function L(r){var t=Object.keys(r)[0],n=r[t];return y(n)?n.numElements:n.data.length/n.numComponents}function M(r,t,n){var e={attribs:w(r,t,n)},o=t.indices;return o?(o=F(o,"indices"),e.indices=p(r,o,r.ELEMENT_ARRAY_BUFFER),e.numElements=o.length):e.numElements=L(t),e}function S(r,t){var n={};return Object.keys(t).forEach(function(e){var o="indices"===e?r.ELEMENT_ARRAY_BUFFER:r.ARRAY_BUFFER,a=F(t[e],name);n[e]=p(r,a,o)}),t.indices?n.numElements=t.indices.length:t.position&&(n.numElements=t.position.length/3),n}function U(r,t,n,e,o){var a=t.indices;n=void 0===n?r.TRIANGLES:n;var i=void 0===e?t.numElements:e;o=void 0===o?o:0,a?r.drawElements(n,i,r.UNSIGNED_SHORT,o):r.drawArrays(n,o,i)}function B(r,t){var n=null,e=null;t.forEach(function(t){var o=t.programInfo,a=t.bufferInfo,i=!1;o!==n&&(n=o,r.useProgram(o.program),i=!0),(i||a!==e)&&(e=a,A(r,o.attribSetters,a)),f(o.uniformSetters,t.uniforms),U(r,a)})}var I=this||window,C=["VERTEX_SHADER","FRAGMENT_SHADER"],P=["","MOZ_","OP_","WEBKIT_"],O=!!document.documentMode,D=!O&&!!window.StyleMedia;return D&&(HTMLCanvasElement.prototype.getContext=function(r){return function(){var t=arguments,n=t[0];return"webgl"===n&&(t=[].slice.call(arguments),t[0]="experimental-webgl"),r.apply(this,t)}}(HTMLCanvasElement.prototype.getContext)),{createAugmentedTypedArray:g,createAttribsFromArrays:w,createBuffersFromArrays:S,createBufferInfoFromArrays:M,createAttributeSetters:c,createProgram:n,createProgramFromScripts:o,createProgramFromSources:a,createProgramInfo:l,createUniformSetters:u,createVAOAndSetAttributes:m,createVAOFromBufferInfo:d,drawBufferInfo:U,drawObjectList:B,getExtensionWithKnownPrefixes:v,resizeCanvasToDisplaySize:E,setAttributes:s,setBuffersAndAttributes:A,setUniforms:f}}},49:function(r,t,n){"use strict";function e(r){return r&&r.__esModule?r:{default:r}}var o=n(20),a=e(o),i=n(19),u=e(i),f=n(3),c=e(f),s=document.body||document.head||document,m=document.createElement("script");m.id="drawImage-vertex-shader",m.type="x-shader/x-vertex",m.innerHTML="\n    attribute vec4 a_position;\n    attribute vec2 a_texcoord;\n\n    uniform mat4 u_matrix;\n    uniform mat4 u_textureMatrix;\n\n    varying vec2 v_texcoord;\n\n    void main() {\n       gl_Position = u_matrix * a_position;\n       v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;\n    }\n",s.appendChild(m);var d=document.createElement("script");d.id="drawImage-fragment-shader",d.type="x-shader/x-fragment",d.innerHTML="\n    precision mediump float;\n\n    varying vec2 v_texcoord;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n       gl_FragColor = texture2D(u_texture, v_texcoord);\n        // vec4 color = texture2D(u_texture, v_texcoord);\n        // gl_FragColor = vec4(color.rgb, 0.9 * color.b);\n    }\n",s.appendChild(d),window.m4=(0,u.default)(),window.webglUtils=(0,a.default)(),window.Easycanvas.$webglPainter=function(r,t,n,e,o,a,i,u,f,c,s,m,d){var l=r.$gl;l.bindTexture(l.TEXTURE_2D,t);var A=l.matrix;A=m4.translate(A,f,c,0),d.rotate&&(A=m4.translate(A,-f+d.beforeRotate[0]||0,-c+d.beforeRotate[1]||0,0),A=m4.zRotate(A,d.rotate),A=m4.translate(A,f+d.afterRotate[0]||0,c+d.afterRotate[1]||0,0)),A=m4.scale(A,s,m,1),l.uniformMatrix4fv(l.matrixLocation,!1,A);var v=m4.translation(o/n,a/e,0);v=m4.scale(v,i/n,u/e,1),l.uniformMatrix4fv(l.textureMatrixLocation,!1,v),l.drawElements(l.TRIANGLES,6,l.UNSIGNED_SHORT,0)},window.Easycanvas.$webglRegister=function(r){var t=r.$gl=r.$paintContext;t.matrix=m4.orthographic(0,t.canvas.width,t.canvas.height,0,-1,1),t.clearColor(0,0,0,0),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.program=webglUtils.createProgramFromScripts(t,["drawImage-vertex-shader","drawImage-fragment-shader"]),t.useProgram(t.program),t.positionLocation=t.getAttribLocation(t.program,"a_position"),t.texcoordLocation=t.getAttribLocation(t.program,"a_texcoord"),t.matrixLocation=t.getUniformLocation(t.program,"u_matrix"),t.textureMatrixLocation=t.getUniformLocation(t.program,"u_textureMatrix"),t.textureLocation=t.getUniformLocation(t.program,"u_texture"),t.positionBuffer=t.positionBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,t.positionBuffer),t.enableVertexAttribArray(t.positionLocation),t.vertexAttribPointer(t.positionLocation,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(t.texcoordLocation),t.vertexAttribPointer(t.texcoordLocation,2,t.FLOAT,!1,0,0);var n=[0,0,1,0,0,1,1,1];t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW);var e=t.createBuffer();t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e),t.texcoordBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,t.texcoordBuffer);var o=[0,0,1,0,0,1,1,1];t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW);var a=[0,1,2,2,1,3];t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(a),t.STATIC_DRAW),r.imgLoader=function(r,n){var e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR);var o={width:0,height:0,texture:e};return(0,c.default)(r,function(r){function e(r){var e=new Image;e.addEventListener("load",function(){o.width=e.width,o.height=e.height,t.bindTexture(t.TEXTURE_2D,o.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),n&&n(o)}),e.src=r}e(r,n)}),o}}}})});