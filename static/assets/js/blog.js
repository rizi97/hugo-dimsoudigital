$(document).ready(function () {

    $('.filter_list li a').on('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.filter_list li').forEach(li => {
            li.classList.remove('active');
        });
        this.parentNode.classList.add('active');
        this.classList.add('active');
        var filterValue = $(this).attr('value');
        $('.box-item').removeClass().addClass('box-item');

        $('.box-item').hide(); // Hide all box items

        if (filterValue === 'all') {
            $('.box-item').show(); // Show all box items if "All" is clicked          
            $('.box-item').first().addClass('w-full md:max-w-66 md:w-66% overflow-hidden md:float-left pt-[24px] md:pt-[40px] mb-[24px] md:mb-0 md:pl-[24px]');
            $('.box-item').first().find(".pro-img").removeClass().addClass("pro-img w-full pr-0 md:w-full md:pr-0");
            $('.box-item').first().find(".pro-content").removeClass().addClass("pro-content w-full pl-0 test");
            $('.box-item').first().find(".pro-content .datee").removeClass().addClass("datee mt-[24px] text-[12px] md:text-[14px] leading-19px md:leading-23px  text-light-gray");
            $('.box-item').first().find(".pro-content .texte").removeClass().addClass("texte mt-[16px] text-[12px] md:text-[14px] leading-19px md:leading-23px  text-light-gray");
            $('.box-item').first().find(".pro-content h3").removeClass().addClass("mt-[4px] md:mt-[8px] text-[24px] md:text-[48px] text-white font-medium leading-28px md:leading-62px");
            $('.box-item').not(':first').addClass('w-full md:w-[33.033%] overflow-hidden flex md:inline-block md:pl-[24px] pt-[16px] md:pt-[40px]'); // Apply different classes to other visible box-items
            $('.box-item').not(':first').find(".pro-img").removeClass().addClass("pro-img w-1/2 pr-[12px] md:w-full md:pr-0 h-[124px] md:h-auto");
            $('.box-item').not(':first').find(".pro-content").removeClass().addClass("pro-content w-1/2 pl-[12px] md:w-full md:pl-0");
            $('.box-item').not(':first').find(".pro-content .datee").removeClass().addClass("datee mt-0 md:mt-[24px] text-[12px] md:text-[14px] leading-19px md:leading-23px  text-light-gray");
            $('.box-item').not(':first').find(".pro-content .texte").removeClass().addClass("texte mt-[16px] md:mt-[16px] text-[12px] md:text-[14px] leading-19px md:leading-23px  text-light-gray");
            $('.box-item').not(':first').find(".pro-content h3").removeClass().addClass("mt-[4px] mb-0 text-[18px] md:text-[24px] text-white font-medium leading-21px md:leading-28px");

        } else {
            var $matchingItems = $('.box-item[data*="' + filterValue + '"]');
            $matchingItems.show(); // Show box items whose data attribute contains the clicked filter value
            $matchingItems.first().addClass('w-full md:max-w-66 md:w-66% overflow-hidden md:float-left pt-[24px] md:pt-[40px] mb-[24px] md:mb-0 md:pl-[24px]');
            $matchingItems.first().find(".pro-img").removeClass().addClass("pro-img w-full pr-0 md:w-full md:pr-0");
            $matchingItems.first().find(".pro-content").removeClass().addClass("pro-content w-full pl-0 test2");
            $matchingItems.first().find(".pro-content .datee").removeClass().addClass("datee mt-[24px] text-[12px] md:text-[14px] leading-19px md:leading-23px  text-light-gray");
            $matchingItems.first().find(".pro-content .texte").removeClass().addClass("texte mt-[16px] text-[12px] md:text-[14px] leading-19px md:leading-23px  text-light-gray");
            $matchingItems.first().find(".pro-content h3").removeClass().addClass("mt-[4px] md:mt-[8px] text-[24px] md:text-[48px] text-white font-medium leading-28px md:leading-62px");
            $matchingItems.not(':first').addClass('w-full md:w-[33.033%] overflow-hidden flex md:inline-block md:pl-[24px] pt-[16px] md:pt-[40px]'); // Apply different classes to other visible matching box-items
            $matchingItems.not(':first').find(".pro-img").removeClass().addClass("pro-img w-1/2 pr-[12px] md:w-full md:pr-0 h-[124px] md:h-auto");
            $matchingItems.not(':first').find(".pro-content").removeClass().addClass("pro-content w-1/2 pl-[12px] md:w-full md:pl-0");
            $matchingItems.not(':first').find(".pro-content .datee").removeClass().addClass("datee mt-0 md:mt-[24px] text-[12px] md:text-[14px] leading-19px md:leading-23px  text-light-gray");
            $matchingItems.not(':first').find(".pro-content .texte").removeClass().addClass("texte mt-[16px] md:mt-[16px] text-[12px] md:text-[14px] leading-19px md:leading-23px  text-light-gray");
            $matchingItems.not(':first').find(".pro-content h3").removeClass().addClass("mt-[4px] mb-0 text-[18px] md:text-[24px] text-white font-medium leading-21px md:leading-28px");

        }

        // Add active class to the clicked filter and remove it from others
        $('.filter_list li').removeClass('active');
        $(this).closest('li').addClass('active');

    });
});
