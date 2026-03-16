import '../../client/css/share.scss';

listReport = function () {
    const list = document.querySelector('.lpList');
    const categories = document.querySelector('.lpCategories');
    const imageModal = document.getElementById('lpImageDialog');
    const modalOverlay = document.querySelector('.lpModalOverlay');

    function init() {
        initEventHandlers();
    }

    function WeightToMg(value, unit) {
        if (unit == 'g') return value * 1000;
        if (unit == 'kg') return value * 1000000;
        if (unit == 'oz') return value * 28349.5;
        if (unit == 'lb') return value * 453592;
    }

    function MgToWeight(value, unit, display) {
        if (typeof display === 'undefined') display = false;
        if (unit == 'g') return Math.round(100 * value / 1000.0) / 100;
        if (unit == 'kg') return Math.round(100 * value / 1000000.0, 2) / 100;
        if (unit == 'oz') return Math.round(100 * value / 28349.5, 2) / 100;
        if (unit == 'lb') {
            if (display) {
                let out = '';
                const poundsFloat = value / 453592.0;
                const pounds = Math.floor(poundsFloat);
                const oz = Math.round((poundsFloat % 1) * 16 * 100) / 100;
                if (pounds) {
                    out += 'lb';
                    if (pounds > 1) out += 's';
                }
            } else {
                return Math.round(100 * value / 453592.0, 2) / 100;
            }
        }
    }

    function updateSubtotalsUnit(unit) {
        document.querySelectorAll('.lpDisplaySubtotal').forEach((el) => {
            el.textContent = MgToWeight(parseFloat(el.getAttribute('mg')), unit);
            el.nextElementSibling.textContent = unit;
        });
    }

    function initEventHandlers() {
        list.addEventListener('click', (evt) => {
            const unitSelect = evt.target.closest('.lpUnitSelect');
            if (!unitSelect) return;

            evt.stopPropagation();
            unitSelect.classList.toggle('lpOpen');
            const value = unitSelect.querySelector('.lpUnit').value;
            const ul = unitSelect.querySelector('ul');
            ul.classList.remove('oz', 'lb', 'g', 'kg');
            ul.classList.add(value);

            const li = evt.target.closest('li');
            if (li) {
                const unit = li.textContent.trim();
                unitSelect.querySelector('.lpDisplay').textContent = unit;
                unitSelect.querySelector('.lpUnit').value = unit;
                if (li.closest('.lpTotalUnit')) {
                    const total = li.closest('.lpTotal');
                    const mg = parseFloat(unitSelect.querySelector('.lpMG').value);
                    total.querySelector('.lpTotalValue').textContent = MgToWeight(mg, unit);
                    updateSubtotalsUnit(unit);
                } else {
                    document.querySelectorAll('.lpWeight').forEach((weightEl) => {
                        const weightCell = weightEl.parentElement;
                        const mg = parseFloat(weightCell.querySelector('.lpMG').value);
                        weightEl.textContent = MgToWeight(mg, unit);
                        weightCell.querySelector('.lpDisplay').textContent = unit;
                    });
                }
            }
        });

        categories.addEventListener('click', (evt) => {
            const imageLink = evt.target.closest('.lpItemImage');
            if (!imageLink) return;
            evt.preventDefault();
            const imageUrl = imageLink.getAttribute('href');
            const img = document.createElement('img');
            img.src = imageUrl;
            imageModal.innerHTML = '';
            imageModal.appendChild(img);
            img.addEventListener('load', () => {
                imageModal.style.display = 'block';
                modalOverlay.style.display = 'block';
                centerDialog();
            });
        });

        modalOverlay.addEventListener('click', () => {
            if (!imageModal.classList.contains('sticky')) {
                modalOverlay.style.display = 'none';
                imageModal.style.display = 'none';
            }
        });

        document.addEventListener('click', () => {
            document.querySelectorAll('.lpOpen').forEach((el) => el.classList.remove('lpOpen'));
        });
    }

    init();
};

function centerDialog() {
    const dialog = document.querySelector('.dialog');
    if (dialog) {
        dialog.style.marginTop = `${-dialog.offsetHeight / 2}px`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    listReport();
});
