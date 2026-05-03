    document.addEventListener("DOMContentLoaded", function() {
        const downloadBtn = document.getElementById('download-link');

        if (downloadBtn) {
            downloadBtn.addEventListener('click', function(e) {
                // Don't prevent default! We still want the browser to start the download.
                
                // If it's already loading, do nothing
                if (this.classList.contains('is-loading')) return;

                // Save the original button content
                const originalContent = this.innerHTML;

                // Add the loading class
                this.classList.add('is-loading');

                // Change the HTML to show the spinner and new text
                this.innerHTML = `
                    <span>سيبدأ التحميل الآن...</span>
                    <svg class="spinner" viewBox="0 0 50 50">
                        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                    </svg>
                `;

                // Revert back to original state after 4 seconds
                // (Since we can't track exactly when a standard APK download finishes)
                setTimeout(() => {
                    this.classList.remove('is-loading');
                    this.innerHTML = originalContent;
                }, 2000);
            });
        }
    });

