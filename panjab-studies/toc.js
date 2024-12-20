// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">History, Heritage and Heroes</li><li class="chapter-item expanded "><a href="history/index.html"><strong aria-hidden="true">1.</strong> History</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">1.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">1.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><a href="heritage/index.html"><strong aria-hidden="true">2.</strong> Heritage</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">2.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">2.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><a href="heroes/index.html"><strong aria-hidden="true">3.</strong> Heroes</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Language, Culture and People</li><li class="chapter-item expanded "><a href="language/index.html"><strong aria-hidden="true">4.</strong> Language</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><a href="culture/index.html"><strong aria-hidden="true">5.</strong> Culture</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><a href="people/index.html"><strong aria-hidden="true">6.</strong> People</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Geography, Politics and Economy</li><li class="chapter-item expanded "><a href="geography/index.html"><strong aria-hidden="true">7.</strong> Geography</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">7.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">7.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><a href="politics/index.html"><strong aria-hidden="true">8.</strong> Politics</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">8.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">8.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><a href="economy/index.html"><strong aria-hidden="true">9.</strong> Economy</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Industry, Business and Education</li><li class="chapter-item expanded "><a href="industry/index.html"><strong aria-hidden="true">10.</strong> Industry</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">10.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">10.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><a href="business/index.html"><strong aria-hidden="true">11.</strong> Business</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">11.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">11.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><a href="education/index.html"><strong aria-hidden="true">12.</strong> Education</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">12.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">12.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Values, Vision and Ideology</li><li class="chapter-item expanded "><a href="values/index.html"><strong aria-hidden="true">13.</strong> Values</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">13.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">13.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><a href="vision/index.html"><strong aria-hidden="true">14.</strong> Vision</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">14.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">14.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><a href="ideology/index.html"><strong aria-hidden="true">15.</strong> Ideology</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">15.1.</strong> Draft Chapter</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">15.1.1.</strong> Draft Chapter</div></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="suffix.html">Suffix Chapter</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
