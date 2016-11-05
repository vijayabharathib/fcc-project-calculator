document.addEventListener("DOMContentLoaded",function(e){function t(e,t){var r=e;switch(t){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":r=s?t:e+t,s=!1;break;case".":var n=/(\+|\*|\/|-)\d+$/;(e.indexOf(".")==-1||n.test(e))&&(r=e+t);break;case"+":case"/":case"*":e.indexOf("+")!=e.length-1&&e.indexOf("-")!=e.length-1&&e.indexOf("/")!=e.length-1&&e.indexOf("*")!=e.length-1&&(r=e+t),s=!1;break;case"-":var c=e.substr(e.length-2,e.length);/[-\+\/\*]{2}/.test(c)||(r=e+t),s=!1;break;case"Delete":r=e.substr(0,e.length-1);break;case"AC":case"c":r="";break;case"=":case"Enter":strExpression=e,r=a(strExpression),strExpression!==r&&(s=!0)}return r}function a(e){var t=0,a=e.split(/[-\+\*\/]+/),s=e.split(/[^-\+\*\/]+/);if("-"==s.shift()&&(a.shift(),a[0]=parseFloat(a[0])*-1),s.pop(),0==s.length)return e;for(var r=0;r<s.length;r++){var n=1;2==s[r].length&&"-"==s[r][1]&&(n=-1,s[r]=s[r][0]);var c=parseFloat(a[r]),l=parseFloat(a[r+1])*n;switch(s[r]){case"+":t=c+l;break;case"-":t=c-l;break;case"*":t=c*l;break;case"/":t=c/l}a[r+1]=t}return Number.isInteger(t)?t:t.toFixed(3)}for(var s=!1,r=function(e){var a=document.querySelector(".input"),s=a.value;a.value=t(s,this.innerText)},n=document.querySelectorAll("button"),c=0;c<n.length;c++)n[c].onclick=r;document.onkeypress=function(e){e.preventDefault();var a=document.querySelector(".input"),s=a.value;a.value=t(s,e.key),a.scrollLeft=a.scrollWidth}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm9wZXJhdGlvbnMiLCJleHByZXNzaW9uIiwiaW5wdXQiLCJyZXN1bHQiLCJyZWNlbnRseVJlc3VsdGVkIiwiZXhwIiwiaW5kZXhPZiIsInRlc3QiLCJsZW5ndGgiLCJsYXN0VHdvIiwic3Vic3RyIiwic3RyRXhwcmVzc2lvbiIsInJlc29sdmVFeHByZXNzaW9uIiwiYXJyIiwic3BsaXQiLCJhcnJPcGVyYW5kcyIsInNoaWZ0IiwicGFyc2VGbG9hdCIsInBvcCIsImkiLCJuZWdhdGl2ZSIsImEiLCJiIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwidG9GaXhlZCIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZGlzcGxheSIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsInRoaXMiLCJpbm5lclRleHQiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsIm9uY2xpY2siLCJvbmtleXByZXNzIiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsV2lkdGgiXSwibWFwcGluZ3MiOiJBQUtBQSxTQUFTQyxpQkFBaUIsbUJBQW1CLFNBQVNDLEdBd0NwRCxRQUFTQyxHQUFXQyxFQUFXQyxHQUM3QixHQUFJQyxHQUFPRixDQUdYLFFBQU9DLEdBR0wsSUFBSyxJQUNMLElBQUssSUFDTCxJQUFLLElBQ0wsSUFBSyxJQUNMLElBQUssSUFDTCxJQUFLLElBQ0wsSUFBSyxJQUNMLElBQUssSUFDTCxJQUFLLElBQ0wsSUFBSyxJQUdEQyxFQURDQyxFQUNNRixFQUVBRCxFQUFXQyxFQUVwQkUsR0FBaUIsQ0FDakIsTUFDRixLQUFLLElBSUgsR0FBSUMsR0FBSSxvQkFDTEosRUFBV0ssUUFBUSxVQUFZRCxFQUFJRSxLQUFLTixNQUN6Q0UsRUFBT0YsRUFBV0MsRUFFcEIsTUFDRixLQUFLLElBQ0wsSUFBSyxJQUNMLElBQUssSUFHQUQsRUFBV0ssUUFBUSxNQUFNTCxFQUFXTyxPQUFPLEdBQzFDUCxFQUFXSyxRQUFRLE1BQU1MLEVBQVdPLE9BQU8sR0FDM0NQLEVBQVdLLFFBQVEsTUFBTUwsRUFBV08sT0FBTyxHQUMzQ1AsRUFBV0ssUUFBUSxNQUFNTCxFQUFXTyxPQUFPLElBQzdDTCxFQUFPRixFQUFXQyxHQUVwQkUsR0FBaUIsQ0FDakIsTUFDRixLQUFLLElBU0gsR0FBSUssR0FBUVIsRUFBV1MsT0FBT1QsRUFBV08sT0FBTyxFQUFFUCxFQUFXTyxPQUN4RCxnQkFBZUQsS0FBS0UsS0FDdkJOLEVBQU9GLEVBQVdDLEdBQ3BCRSxHQUFpQixDQUNqQixNQUNGLEtBQUssU0FDSEQsRUFBT0YsRUFBV1MsT0FBTyxFQUFFVCxFQUFXTyxPQUFPLEVBQzdDLE1BQ0YsS0FBSyxLQUNMLElBQUssSUFDSEwsRUFBTyxFQUNQLE1BQ0YsS0FBSyxJQUNMLElBQUssUUFDSFEsY0FBY1YsRUFDZEUsRUFBT1MsRUFBa0JELGVBT3RCQSxnQkFBZ0JSLElBQ2pCQyxHQUFpQixHQUd2QixNQUFPRCxHQUdULFFBQVNTLEdBQWtCWCxHQUN6QixHQUFJRSxHQUFPLEVBRVBVLEVBQUlaLEVBQVdhLE1BQU0sY0FDckJDLEVBQVlkLEVBQVdhLE1BQU0sY0FVakMsSUFOd0IsS0FBckJDLEVBQVlDLFVBRWJILEVBQUlHLFFBQ0pILEVBQUksR0FBR0ksV0FBV0osRUFBSSxRQUV4QkUsRUFBWUcsTUFDVyxHQUFwQkgsRUFBWVAsT0FDYixNQUFPUCxFQUNULEtBQUksR0FBSWtCLEdBQUUsRUFBRUEsRUFBRUosRUFBWVAsT0FBT1csSUFBSSxDQUNuQyxHQUFJQyxHQUFTLENBQ2EsSUFBdkJMLEVBQVlJLEdBQUdYLFFBQWdDLEtBQW5CTyxFQUFZSSxHQUFHLEtBSTVDQyxLQUNBTCxFQUFZSSxHQUFHSixFQUFZSSxHQUFHLEdBR2hDLElBQUlFLEdBQUVKLFdBQVdKLEVBQUlNLElBQ2pCRyxFQUFFTCxXQUFXSixFQUFJTSxFQUFFLElBQUlDLENBQzNCLFFBQVFMLEVBQVlJLElBQ2xCLElBQUssSUFDSGhCLEVBQU9rQixFQUFFQyxDQUNULE1BQ0YsS0FBSyxJQUNIbkIsRUFBT2tCLEVBQUVDLENBQ1QsTUFDRixLQUFLLElBQ0huQixFQUFPa0IsRUFBRUMsQ0FDVCxNQUNGLEtBQUssSUFDSG5CLEVBQU9rQixFQUFFQyxFQUdiVCxFQUFJTSxFQUFFLEdBQUdoQixFQUdYLE1BQU9vQixRQUFPQyxVQUFVckIsR0FBVUEsRUFBUUEsRUFBT3NCLFFBQVEsR0F0SjNELElBQUksR0FuQkFyQixJQUFpQixFQVFqQnNCLEVBQWEsU0FBU0MsR0FDeEIsR0FBSUMsR0FBUS9CLFNBQVNnQyxjQUFjLFVBQy9CNUIsRUFBVzJCLEVBQVFFLEtBQ3ZCRixHQUFRRSxNQUFNOUIsRUFBV0MsRUFBVzhCLEtBQUtDLFlBT3ZDQyxFQUFRcEMsU0FBU3FDLGlCQUFpQixVQUM5QmYsRUFBRSxFQUFFQSxFQUFFYyxFQUFRekIsT0FBT1csSUFDM0JjLEVBQVFkLEdBQUdnQixRQUFRVCxDQVFyQjdCLFVBQVN1QyxXQUFXLFNBQVNULEdBQzNCQSxFQUFNVSxnQkFDTixJQUFJVCxHQUFRL0IsU0FBU2dDLGNBQWMsVUFDL0I1QixFQUFXMkIsRUFBUUUsS0FDdkJGLEdBQVFFLE1BQU05QixFQUFXQyxFQUFXMEIsRUFBTVcsS0FDMUNWLEVBQVFXLFdBQVdYLEVBQVFZIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgKiB3YWl0IHVudGlsIHRoZSBkb2MgaXMgcmVhZHkgdG8gb2JleSBvcmRlcnNcbiAgKiBiaW5kIGNsaWNrIGhhbmRsZXIgdG8gR1VJIGJ1dHRvbnNcbiAgKiBiaW5kIGtleXByZXNzIGhhbmRsZXIgdG8gdGhlIHdob2xlIGRvY3VtZW50XG4gICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKGUpe1xuICB2YXIgcmVjZW50bHlSZXN1bHRlZD1mYWxzZTtcblxuXG4gIC8qKlxuICAgICogZ2V0IHRoZSBHVUkgYnV0dG9uJ3MgdGV4dFxuICAgICogcHJvY2VzcyBpdCBvbiB0b3Agb2YgY3VycmVudCBleHByZXNzaW9uXG4gICAgKiBhbmQgZGlzcGxheSB0aGUgcmVzdWx0aW5nIHZhbHVlL2V4cHJlc3Npb25cbiAgICAqL1xuICB2YXIgY2xpY2tIYW5kbGVyPWZ1bmN0aW9uKGV2ZW50KXtcbiAgICB2YXIgZGlzcGxheT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpO1xuICAgIHZhciBleHByZXNzaW9uPWRpc3BsYXkudmFsdWU7XG4gICAgZGlzcGxheS52YWx1ZT1vcGVyYXRpb25zKGV4cHJlc3Npb24sdGhpcy5pbm5lclRleHQpO1xuICB9O1xuXG4gIC8qKlxuICAgICogZ2V0IGhhbmRsZSB0byBhbGwgYnV0dG9uc1xuICAgICogbG9vcCB0aHJvdWdoIGVhY2ggYnV0dG9uIGFuZCBiaW5kIGNsaWNrIGhhbmRsZXJcbiAgICAqL1xuICB2YXIgYnV0dG9ucz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuICBmb3IodmFyIGk9MDtpPGJ1dHRvbnMubGVuZ3RoO2krKyl7XG4gICAgYnV0dG9uc1tpXS5vbmNsaWNrPWNsaWNrSGFuZGxlcjtcbiAgfVxuXG4gIC8qKlxuICAgICogc3RvcCBkZWZhdWx0IGtleXByZXNzIHByb2Nlc3NpbmcgKHRvIGF2b2lkIGRvdWJsZSBjaGFycylcbiAgICAqIHBhc3MgdGhlIGtleSBwcmVzc2VkIGFsb25nIHdpdGggY3VycmV0IGV4cHJlc3Npb25cbiAgICAqIGRpc3BsYXkgcmVzdWx0aW5nIHZhbHVlL2V4cHJlc3Npb25cbiAgICAqL1xuICBkb2N1bWVudC5vbmtleXByZXNzPWZ1bmN0aW9uKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBkaXNwbGF5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIik7XG4gICAgdmFyIGV4cHJlc3Npb249ZGlzcGxheS52YWx1ZTtcbiAgICBkaXNwbGF5LnZhbHVlPW9wZXJhdGlvbnMoZXhwcmVzc2lvbixldmVudC5rZXkpO1xuICAgIGRpc3BsYXkuc2Nyb2xsTGVmdD1kaXNwbGF5LnNjcm9sbFdpZHRoO1xuICB9O1xuXG4gIC8qKlxuICAgICpcbiAgICAqL1xuICBmdW5jdGlvbiBvcGVyYXRpb25zKGV4cHJlc3Npb24saW5wdXQpe1xuICAgIHZhciByZXN1bHQ9ZXhwcmVzc2lvbjtcblxuXG4gICAgc3dpdGNoKGlucHV0KXtcbiAgICAgIC8vanVzdCBrZWVwIGFkZGluZyB0aGUgbnVtYmVyc1xuICAgICAgLy91bmxlc3MgdGhlIGV4cHJlc3Npb24gaXMgYSByZXN1bHQgb2YgbGFzdCBldmFsdWF0aW9uXG4gICAgICBjYXNlICcwJzpcbiAgICAgIGNhc2UgJzEnOlxuICAgICAgY2FzZSAnMic6XG4gICAgICBjYXNlICczJzpcbiAgICAgIGNhc2UgJzQnOlxuICAgICAgY2FzZSAnNSc6XG4gICAgICBjYXNlICc2JzpcbiAgICAgIGNhc2UgJzcnOlxuICAgICAgY2FzZSAnOCc6XG4gICAgICBjYXNlICc5JzpcbiAgICAgIC8vc3RhcnQgbmV3IG51bWJlciBpZiB0aGUgZXhwcmVzc2lvbiBpcyBhIHJlc3VsdCBvZiBsYXN0IGV2YWx1YXRpb25cbiAgICAgICAgaWYocmVjZW50bHlSZXN1bHRlZCkge1xuICAgICAgICAgIHJlc3VsdD1pbnB1dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQ9ZXhwcmVzc2lvbitpbnB1dDtcbiAgICAgICAgfVxuICAgICAgICByZWNlbnRseVJlc3VsdGVkPWZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJy4nOlxuICAgICAgICAvL2FsbG93IGZsb2F0cyBpZiB0aGUgZXhwcmVzc2lvbiBoYXMgbnVtYmVycyBhdCB0aGUgZW5kICwgaGVuY2UgJFxuICAgICAgICAvL2xvb2sgZm9yIG9wdGlvbmFsIG9wZXJhbmRzIGluIGZyb250IG9mIHRoZSBudW1iZXJcbiAgICAgICAgLy9vciB0aGVyZSBhcmUgbm8gZG90cyB5ZXQgd2hpY2ggd2lsbCBnaXZlIGluZGV4T2YgYXMgLTFcbiAgICAgICAgdmFyIGV4cD0vKFxcK3xcXCp8XFwvfC0pXFxkKyQvO1xuICAgICAgICBpZihleHByZXNzaW9uLmluZGV4T2YoJy4nKT09LTEgfHwgZXhwLnRlc3QoZXhwcmVzc2lvbikpe1xuICAgICAgICAgIHJlc3VsdD1leHByZXNzaW9uK2lucHV0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnKyc6XG4gICAgICBjYXNlICcvJzpcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICAvL2FkZCB0aGVzZSBvcGVyYW5kcyB0byB0aGUgcmVzdWx0XG4gICAgICAgIC8vYXMgbG9uZyBhcyB0aGUgbGFzdCBjaGFyIGlzIG5vdCBvbmUgb2YgdGhlc2Ugb3BlcmFuZHNcbiAgICAgICAgaWYoZXhwcmVzc2lvbi5pbmRleE9mKCcrJykhPWV4cHJlc3Npb24ubGVuZ3RoLTEgJiZcbiAgICAgICAgICAgIGV4cHJlc3Npb24uaW5kZXhPZignLScpIT1leHByZXNzaW9uLmxlbmd0aC0xICYmXG4gICAgICAgICAgICBleHByZXNzaW9uLmluZGV4T2YoJy8nKSE9ZXhwcmVzc2lvbi5sZW5ndGgtMSAmJlxuICAgICAgICAgICAgZXhwcmVzc2lvbi5pbmRleE9mKCcqJykhPWV4cHJlc3Npb24ubGVuZ3RoLTEgKXtcbiAgICAgICAgICByZXN1bHQ9ZXhwcmVzc2lvbitpbnB1dDtcbiAgICAgICAgfVxuICAgICAgICByZWNlbnRseVJlc3VsdGVkPWZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgICAvKipcbiAgICAgICAgICAqIHNwZWNpYWwgb3BlcmFuZCBjYXNlXG4gICAgICAgICAgKiBhbGxvdyBtaW51cyBldmVuIGlmIHByZXZpb3VzIG9uZSB3YXMgYW4gb3BlcmFuZFxuICAgICAgICAgICogYmVjYXVzZSB0aGUgZm9sbG93aW5nIGtleXByZXNzIGNvdWxkIGJlIGEgbnVtYmVyXG4gICAgICAgICAgKiBhbmQgdGhpcyBoeXBoZW4gbWlnaHQgYmUgYSBwcmVmaXggdG8gZGVub3RlIG5lZ2F0aXZlIG51bWJlclxuICAgICAgICAgICogYnV0IGRvIG5vdCBhbGxvdyBtb3JlIHRoYW4gdHdvIG9wZXJhbmRzXG4gICAgICAgICAgKiBpLmUgLS0sICotLCAvLSwgKy0gYXJlIGFsbG93ZWQsIC0tLSwgKy0tIGV0YyBhcmUgbm90IGFsbG93ZWRcbiAgICAgICAgICAqL1xuICAgICAgICB2YXIgbGFzdFR3bz1leHByZXNzaW9uLnN1YnN0cihleHByZXNzaW9uLmxlbmd0aC0yLGV4cHJlc3Npb24ubGVuZ3RoKTtcbiAgICAgICAgaWYoISgvWy1cXCtcXC9cXCpdezJ9Ly50ZXN0KGxhc3RUd28pKSkgLy9pZiB0aGUgbGFzdCB0d28gY2hhcnMgYXJlIG5vdCBvcGVyYW5kc1xuICAgICAgICAgIHJlc3VsdD1leHByZXNzaW9uK2lucHV0O1xuICAgICAgICByZWNlbnRseVJlc3VsdGVkPWZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0RlbGV0ZSc6XG4gICAgICAgIHJlc3VsdD1leHByZXNzaW9uLnN1YnN0cigwLGV4cHJlc3Npb24ubGVuZ3RoLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0FDJzpcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXN1bHQ9XCJcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc9JzpcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgc3RyRXhwcmVzc2lvbj1leHByZXNzaW9uO1xuICAgICAgICByZXN1bHQ9cmVzb2x2ZUV4cHJlc3Npb24oc3RyRXhwcmVzc2lvbik7XG4gICAgICAgIC8qKlxuICAgICAgICAgICogVGhlIGZvbGxvd2luZyBpbnB1dHMgKDM0IEVudGVyIC4gNCkgcmVzdWx0ZWQgaW4gNCBkdWUgdG8gcmVjZW50bHlSZXN1bHRlZCBiZWluZyB0cnVlIGFmdGVyIGVudGVyXG4gICAgICAgICAgKiB2YWxpZGF0aW5nIGlucHV0IGFuZCBvdXRwdXQgZm9yIGVxdWFsaXR5IHdpbGwgc2VlIGlmIHRoZXJlIHdhcyBhbnkgcmVzdWx0XG4gICAgICAgICAgKiBpZiB0aGUgZXhwcmVzc2lvbiB3YXMgcmV0dXJuZWQgYXMgaXQgd2FzIGR1ZSB0byBsYWNrIG9mIG9wZXJhbmRcbiAgICAgICAgICAqIHJlY2VudGx5UmVzdWx0ZWQgaXMgbm90IHRydWUgLSBoZW5jZSB3aWxsIGJlIGxlZnQgZmFsc2VcbiAgICAgICAgICAqL1xuICAgICAgICBpZihzdHJFeHByZXNzaW9uIT09cmVzdWx0KVxuICAgICAgICAgIHJlY2VudGx5UmVzdWx0ZWQ9dHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUV4cHJlc3Npb24oZXhwcmVzc2lvbil7XG4gICAgdmFyIHJlc3VsdD0wO1xuICAgIC8vdmFyIGFycj1leHByZXNzaW9uLnNwbGl0KC9bLVxcK1xcKlxcL10rLyk7XG4gICAgdmFyIGFycj1leHByZXNzaW9uLnNwbGl0KC9bLVxcK1xcKlxcL10rLyk7XG4gICAgdmFyIGFyck9wZXJhbmRzPWV4cHJlc3Npb24uc3BsaXQoL1teLVxcK1xcKlxcL10rLyk7XG5cblxuXG4gICAgaWYoYXJyT3BlcmFuZHMuc2hpZnQoKT09Jy0nKSB7XG4gICAgICAvL2ZpcnN0IG51bWJlciBtdXN0IGhhdmUgYmVlbiBuZWdhdGl2ZTtcbiAgICAgIGFyci5zaGlmdCgpOyAvL3JlbW92ZSB0aGUgZmlyc3QgZW1wdHkgZWxlbWVudFxuICAgICAgYXJyWzBdPXBhcnNlRmxvYXQoYXJyWzBdKSotMTtcbiAgICB9IC8vcmVtb3ZlIGxlYWRpbmcgZW1wdHkgb3BlcmFuZDtcbiAgICBhcnJPcGVyYW5kcy5wb3AoKTsgLy9yZW1vdmUgdHJhaWxpbmcgZW1wdHkgb3BlcmFuZDtcbiAgICBpZihhcnJPcGVyYW5kcy5sZW5ndGg9PTApIC8vaWYgdGhlcmUgYXJlIG5vIG9wZXJhbmRzXG4gICAgICByZXR1cm4gZXhwcmVzc2lvbjsgLy9kbyBub3RoaW5nIG9uIHRoZSBpbnB1dCBleHByZXNzaW9uXG4gICAgZm9yKHZhciBpPTA7aTxhcnJPcGVyYW5kcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciBuZWdhdGl2ZT0xOyAvL2luaXRpYWxseSBhc3N1bWUgcG9zaXRpdmU7XG4gICAgICBpZihhcnJPcGVyYW5kc1tpXS5sZW5ndGg9PTIgJiYgYXJyT3BlcmFuZHNbaV1bMV09PSctJyl7XG4gICAgICAgIC8vb3BlcmFuZCBoYXMgdHdvIHN5bWJvbHMgYW5kIGxhc3Qgb25lIGlzIG1pbnVzXG4gICAgICAgIC8vaXQgYmVsb25ncyB0byB0aGUgdXBjb21pbmcgbnVtYmVyXG4gICAgICAgIC8vaGVuY2UgbXVsdGlwbHkgYnkgLTE7XG4gICAgICAgIG5lZ2F0aXZlPS0xO1xuICAgICAgICBhcnJPcGVyYW5kc1tpXT1hcnJPcGVyYW5kc1tpXVswXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGE9cGFyc2VGbG9hdChhcnJbaV0pO1xuICAgICAgdmFyIGI9cGFyc2VGbG9hdChhcnJbaSsxXSkqbmVnYXRpdmU7XG4gICAgICBzd2l0Y2ggKGFyck9wZXJhbmRzW2ldKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIHJlc3VsdD1hK2I7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIHJlc3VsdD1hLWI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgIHJlc3VsdD1hKmI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgIHJlc3VsdD1hL2I7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBhcnJbaSsxXT1yZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIocmVzdWx0KSA/IHJlc3VsdDogcmVzdWx0LnRvRml4ZWQoMyk7XG4gIH1cblxuICBmdW5jdGlvbiBmcmllbmRseUZvcm1hdChudW1iZXIsbWF4X2RpZ2l0KXtcblxuICB9XG59KTtcbiJdfQ==
