AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});
feather.replace();

function showSection(sectionId) {
    // Hide all sections first
    document.getElementById('personal-info-section').classList.add('hidden');
    document.getElementById('work-experience-section').classList.add('hidden');
    document.getElementById('education-section').classList.add('hidden');
    document.getElementById('skills-section').classList.add('hidden');
    document.getElementById('languages-section').classList.add('hidden');
    
    // Remove active class from all buttons
    document.getElementById('personal-info-btn').classList.remove('bg-indigo-50', 'text-indigo-700');
    document.getElementById('work-experience-btn').classList.remove('bg-indigo-50', 'text-indigo-700');
    document.getElementById('education-btn').classList.remove('bg-indigo-50', 'text-indigo-700');
    document.getElementById('skills-btn').classList.remove('bg-indigo-50', 'text-indigo-700');
    document.getElementById('languages-btn').classList.remove('bg-indigo-50', 'text-indigo-700');
    
    // Show the selected section
    document.getElementById(sectionId + '-section').classList.remove('hidden');
    
    // Add active class to clicked button
    document.getElementById(sectionId + '-btn').classList.add('bg-indigo-50', 'text-indigo-700');
}

// Initialize with personal info section active
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('personal-info-btn').classList.add('bg-indigo-50', 'text-indigo-700');
});

function addExperience() {
    const container = document.getElementById('experience-container');
    const newExperience = `
        <div class="border border-gray-200 rounded-lg p-4 mt-4">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <input type="text" class="text-lg font-bold border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Job Title">
                </div>
                <button class="text-red-500 hover:text-red-700" onclick="this.parentElement.parentElement.remove()">
                    <i data-feather="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
            <input type="text" class="w-full mb-2 text-gray-600 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Company Name">
            <div class="flex space-x-4 mb-2">
                <input type="text" class="w-1/2 text-gray-600 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Start Date">
                <input type="text" class="w-1/2 text-gray-600 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="End Date (or Present)">
            </div>
            <textarea class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" rows="3" placeholder="Responsibilities and achievements"></textarea>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', newExperience);
    feather.replace();
}

function addEducation() {
    const container = document.getElementById('education-container');
    const newEducation = `
        <div class="border border-gray-200 rounded-lg p-4 mt-4">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <input type="text" class="text-lg font-bold border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Degree">
                </div>
                <button class="text-red-500 hover:text-red-700" onclick="this.parentElement.parentElement.remove()">
                    <i data-feather="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
            <input type="text" class="w-full mb-2 text-gray-600 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Institution">
            <div class="flex space-x-4 mb-2">
                <input type="text" class="w-1/2 text-gray-600 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Start Date">
                <input type="text" class="w-1/2 text-gray-600 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="End Date (or Present)">
            </div>
            <textarea class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" rows="2" placeholder="Additional information"></textarea>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', newEducation);
    feather.replace();
}

function addSkill() {
    const container = document.getElementById('skills-container');
    const newSkill = `
        <div class="flex items-center mt-2">
            <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Skill name">
            <select class="ml-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>Expert</option>
            </select>
            <button class="ml-2 text-red-500 hover:text-red-700" onclick="this.parentElement.remove()">
                <i data-feather="trash-2" class="w-4 h-4"></i>
            </button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', newSkill);
    feather.replace();
}

function addLanguage() {
    const container = document.getElementById('languages-container');
    const newLanguage = `
        <div class="flex items-center mt-2">
            <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Language">
            <select class="ml-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>Basic</option>
                <option>Conversational</option>
                <option>Fluent</option>
                <option>Native</option>
            </select>
            <button class="ml-2 text-red-500 hover:text-red-700" onclick="this.parentElement.remove()">
                <i data-feather="trash-2" class="w-4 h-4"></i>
            </button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', newLanguage);
    feather.replace();
}